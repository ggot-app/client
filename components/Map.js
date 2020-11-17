import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default function Map() {
  const vanillaCodingLocation = [37.506059, 127.059130];

  return (
    <View style={styles.contentWrapper}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: vanillaCodingLocation[0],
          longitude: vanillaCodingLocation[1],
          latitudeDelta: 0,
          longitudeDelta: 0.005
        }}
      >
        <Marker
          coordinate={{
            latitude: vanillaCodingLocation[0],
            longitude: vanillaCodingLocation[1]
          }}
          title='vanillaCoding'
          description='Here is vanillaCoding 🥰 '
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  mapStyle: {
    width: '100%',
    height: '100%'
  }
});
