import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ViewPager from '@react-native-community/viewpager';

export default function PhotoMap({ route, navigation }) {
  let photoData = useSelector(state => state.photosByLocation.photoData);
  let focusedNumber = useSelector(state => state.photosByLocation.focusedNumber);
  if (focusedNumber === null) focusedNumber = 0;

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: photoData[focusedNumber].location.lat,
          longitude: photoData[focusedNumber].location.lng,
          latitudeDelta: 0,
          longitudeDelta: 0.005
        }}
      >
        {
          photoData.map(item => {
            return (
              <Marker
                key={item.location.lat}
                coordinate={{
                  latitude: item.location.lat,
                  longitude: item.location.lng,
                }}
              />
            );
          })
        }
      </MapView>
      <View
        style={styles.PhotoMapindicator}
      >
        <ViewPager
          style={styles.itemContainer}
          initialPage={0}
        >
          {
            photoData.map((item, i) => {
              return (
                <View
                  style={styles.itemBox}
                  key={item.uriList[0]}
                >
                  <Image
                    style={styles.itemImage}
                    source={{ uri: item.uriList[0] }}
                  />
                </View>
              );
            })
          }
        </ViewPager>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'red'
  },
  mapView: {
    flex: 1,
    height: '100%',
  },
  PhotoMapindicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30
  },
  itemContainer: {
    width: 100,
    aspectRatio: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBox: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
});
