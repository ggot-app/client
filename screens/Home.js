import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import {
  View,
  Modal,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

import { setUserLocation } from '../actions/index';
import { getPhotosByLocation } from '../utils/api';
import { startLocationTracking } from '../config/LocationTracking';
import BackgroundTaskConfig from '../config/Tasks';
import NotificationConfig, { registerForPushNotificationsAsync } from '../config/Notification';

import Map from '../components/Map';
import PhotoModalView from '../components/PhotoModalView';
import { renderHomeFlatListItem } from '../components/FlatListRenderItem';

BackgroundTaskConfig();
NotificationConfig();

export default function Home({ navigation }) {
  const [ photoList, setPhotoList ] = useState([]);
  const [ refreshing, setRefreshing ] = useState(true);
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ focusedPhotoNumber, setFocusedPhotoNumber ] = useState(0);
  const [ page, setPage ] = useState(1);
  const notificationListener = useRef();
  const responseListener = useRef();

  const dispatch = useDispatch();

  const onRefresh = async () => {
    const userLocation = await Location.getCurrentPositionAsync({});

    if (userLocation) {
      dispatch(setUserLocation(userLocation.coords));

      const data = await getPhotosByLocation(userLocation.coords, page);
      const { photos } = data;

      setPhotoList(photos);
      setRefreshing(false);
    }
  };

  const getMorePhotos = async () => {
    const userLocation = await Location.getCurrentPositionAsync({});

    if (userLocation) {
      const data = await getPhotosByLocation(userLocation.coords, page);
      const { photos } = data;

      const newData = photoList.concat(photos);

      setPhotoList(newData);
      setPage(page + 1);
    } else {
      alert('GPS 위치 정보를 확인해주세요');
    }
  };

  useEffect(() => {
    (async function () {
      await registerForPushNotificationsAsync();

      startLocationTracking();

      notificationListener.current = Notifications.addNotificationReceivedListener(() => {
      });
      responseListener.current = Notifications.addNotificationResponseReceivedListener(() => {
        navigation.navigate('MyPage', { screen: 'MyPhoto' });
      });
    })();

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  useEffect(() => {
    setPage(1);
    onRefresh();
  }, [ refreshing ]);

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.mapWrapper}>
        <TouchableOpacity
          style={styles.mapContainer}
          onPress={() => navigation.navigate('PhotoMap', { photoList: photoList, focusedPhotoNumber: 0 })}
        >
          <Map isScrollEnabled={false}/>
        </TouchableOpacity>
      </View>
      <View style={styles.photoListWrapper}>
        <FlatList
          style={styles.photoList}
          data={photoList}
          renderItem={({ index, item }) => renderHomeFlatListItem(index, item, setIsModalVisible, setFocusedPhotoNumber)}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.published_at}
          numColumns={3}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
            />
          }
          // onEndReached={() => {
          //   getMorePhotos();
          // }}
          // onEndReachedThreshold={0.5}
        />
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalVisible}
      >
        <PhotoModalView
          photoList={photoList}
          navigation={navigation}
          setIsModalVisible={setIsModalVisible}
          focusedPhotoNumber={focusedPhotoNumber}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020126',
  },
  mapWrapper: {
    width: '100%',
    height: 100
  },
  photoListWrapper: {
    width: '100%',
    flex: 3,
    flexDirection: 'row'
  },
  photoList: {
    flex: 1,
    padding: 1,
    backgroundColor: 'white'
  },
  photo: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  mapContainer: {
    width: '100%',
    height: '100%'
  }
});
