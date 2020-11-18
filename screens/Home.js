import React, { useEffect, useState } from 'react';
import { StyleSheet, View, RefreshControl, FlatList, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

import { getPhotosByLocation } from '../utils/api';

import Map from '../components/Map';

export default function Home({ route, navigation }) {
  const [ refreshing, setRefreshing ] = useState(true);
  const [ data, setData ] = useState([]);

  const onRefresh = () => {
    (async function () {
      const location = await Location.getCurrentPositionAsync({});

      if (location) {
        const coords = {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        };
        const result = await getPhotosByLocation(coords);
        setRefreshing(false);
        setData(result);
      }
    })();
  };
  const renderItem = ({ item }) => {
    return (
      <View
        style={styles.photoContainer}
      >
        <Image
          style={styles.photo}
          source={{ uri: item.uri }}
        />
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
          <Map />
        </TouchableOpacity>
      </View>
      <View style={styles.photoListWrapper}>
        <FlatList
          style={styles.photoList}
          data={data}
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
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapWrapper: {
    width: '100%',
    flex: 1,
  },
  photoListWrapper: {
    width: '100%',
    flex: 3,
    flexDirection: 'row',
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
  photo: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'yellow'
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
});
