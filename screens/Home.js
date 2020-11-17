import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

import { getUserLocation } from '../actions/index';

import Map from '../components/Map';

export default function Home() {
  const dispatch = useDispatch();

  const getCurrentPosition = async () => {
    const location = await Location.getCurrentPositionAsync({});
    dispatch(getUserLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    }));
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.mapWrapper}>
        <Map />
      </View>
      <View style={styles.photoListWrapper}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  mapWrapper: {
    width: '100%',
    flex: 1,
    backgroundColor: 'yellow',
    margin: 10,
  },
  photoListWrapper: {
    width: '100%',
    flex: 3,
    backgroundColor: 'green',
  },
});
