import React from 'react';
import { StyleSheet ,View } from 'react-native';

import Map from '../components/Map';

export default function PhotoMap() {

  return (
    <View style={styles.mapContainer}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'red'
  },
});