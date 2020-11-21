import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Modal,
  Image,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

import Map from '../components/Map';
import PhotoModalView from '../components/PhotoModalView';

import { getPhotosByLocation } from '../utils/api';
import { setUserLocation, setPhotoFocus } from '../actions/index';

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const photoData = useSelector(state => state.photosByLocation.photoData);

  const [ modalVisible, setModalVisible ] = useState(false);
  const [ refreshing, setRefreshing ] = useState(true);
  const [ data, setData ] = useState([]);

  const onRefresh = () => {
    (async function () {
      const userLocation = await Location.getCurrentPositionAsync({});

      if (userLocation) {
        const result = await getPhotosByLocation(userLocation.coords);

        dispatch(setUserLocation(userLocation.coords));
        setRefreshing(false);
        setData(result);
      }
    })();
  };
  const renderItem = ({ index, item }) => {
    return (
      <View
        style={styles.photoContainer}
      >
        <TouchableOpacity
          style={styles.photoTouchContainer}
          onPress={() => {
            setModalVisible(true);
            dispatch(setPhotoFocus(index));
          }}
        >
          <Image
            style={styles.photo}
            source={{ uri: item.uriList[0] }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    onRefresh();
  }, [ refreshing ]);

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.mapWrapper}>
        <TouchableOpacity
          style={styles.mapContainer}
          onPress={() => navigation.navigate('PhotoMap')}
        >
          <Map isScrollEnabled={false} />
        </TouchableOpacity>
      </View>
      <View style={styles.photoListWrapper}>
        <FlatList
          style={styles.photoList}
          data={photoData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.uri}
          numColumns={3}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
            />
          }
        />
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <PhotoModalView
          navigation={navigation}
          setModalVisible={setModalVisible}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  photoContainer: {
    flex: 1,
    aspectRatio: 1,
    padding: 1
  },
  photoTouchContainer: {
    width: '100%',
    height: '100%'
  },
  photo: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'yellow'
  },
  mapContainer: {
    width: '100%',
    height: '100%'
  }
});
