import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';

export default function PhotoMap({ route, navigation }) {
  let mapInstance;
  const { photoList, focusedPhotoNumber, fromModal } = route.params;
  const [ list, setList ] = useState(photoList);
  const [ focusedNumber, setFocusedNumber ] = useState(focusedPhotoNumber);

  const changePhotoFocus = direction => {
    if (direction === 'right') {
      if (focusedNumber < list.length -1) {
        mapInstance.animateToRegion({
          latitude: list[focusedNumber + 1].location.lat,
          longitude: list[focusedNumber + 1].location.lng,
          latitudeDelta: 0,
          longitudeDelta: 0.005
        });
        setFocusedNumber(focusedNumber + 1);
      }
    } else if (direction === 'left') {
      if (focusedNumber > 0) {
        mapInstance.animateToRegion({
          latitude: list[focusedNumber - 1].location.lat,
          longitude: list[focusedNumber - 1].location.lng,
          latitudeDelta: 0,
          longitudeDelta: 0.005
        });
        setFocusedNumber(focusedNumber - 1);
      }
    }
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={(ref) => mapInstance = ref}
        style={styles.mapView}
        initialRegion={{
          latitude: list[focusedNumber].location.lat,
          longitude: list[focusedNumber].location.lng,
          latitudeDelta: 0,
          longitudeDelta: 0.005
        }}
      >
        {
          list.map((item, i) => {
            return (
              <Marker
                key={item.location.lat}
                coordinate={{
                  latitude: item.location.lat,
                  longitude: item.location.lng,
                }}
                onPress={() => {
                  setFocusedNumber(i);
                }}
              >
                {
                  i === focusedNumber &&
                  <View
                    style={styles.markerDim}
                  >
                    <Image
                      style={styles.markerPhoto}
                      source={{uri: list[focusedNumber].uriList[0]}}
                    />
                  </View>
                }
              </Marker>
            );
          })
        }
      </MapView>
      <View style={styles.PhotoMapindicator}>
        <TouchableOpacity
          onPress={() => changePhotoFocus('left')}
          style={styles.currentPhotoChangeButton}
        >
          <AntDesign name='left' size={24} color='white'/>
        </TouchableOpacity>
        <Image
          style={styles.currentPhoto}
          source={{uri: list[focusedNumber].uriList[0]}}
        />
        <TouchableOpacity
          onPress={() => changePhotoFocus('right')}
          style={styles.currentPhotoChangeButton}
        >
          <AntDesign name='right' size={24} color='white'/>
        </TouchableOpacity>
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
    height: '100%'
  },
  PhotoMapindicator: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '75%',
    left: 0,
    right: 0,
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentPhoto: {
    height: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentPhotoChangeButton: {
    width: 30,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  markerPhoto: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  markerDim: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    zIndex: 100,
  }
});
