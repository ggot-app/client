import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map() {
  const userLocation = useSelector(state => state.user.coords);

  return (
    <View style={styles.contentWrapper}>
      {
        userLocation &&
        <MapView
          style={styles.mapStyle}
          maxZoomLevel={20}
          scrollEnabled={false}
          initialRegion={{
            latitude: userLocation.lat,
            longitude: userLocation.lng,
            latitudeDelta: 0,
            longitudeDelta: 0.009,
          }}
        >
          <Marker
            coordinate={{
              latitude: userLocation.lat,
              longitude: userLocation.lng,
            }}
            title='vanillaCoding'
            description='Here is vanillaCoding 🥰 '
          />
        </MapView>
      }
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
