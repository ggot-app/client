import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native';

import { getPhotosByLocation } from '../utils/api';

import Map from '../components/Map';

export default function Home() {
  const coords = useSelector(state => state.user.coords);

  // useEffect(() => {
  //   getPhotosByLocation(coords);
  // }, []);

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.mapWrapper}>
        <Map />
      </View>
      <View style={styles.photoListWrapper}>
        {/* <FlatList
          data={}
          renderItem={}
          showsVerticalScrollIndicator={false}
        /> */}
      </View>
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
