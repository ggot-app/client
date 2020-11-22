import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function PhotoMap({ route, navigation }) {
  let mapInstance;

  const { photoList, focusedPhotoNumber } = route.params;
  const [ list, setList ] = useState(photoList);
  const [ focusedNumber, setFocusedNumber ] = useState(focusedPhotoNumber);

  const changePhotoFocus = direction => {
    if (direction === 'right') {
      if (focusedNumber < list.length -1) {
        mapInstance.animateToRegion({
          latitude: list[focusedNumber + 1].location[0],
          longitude: list[focusedNumber + 1].location[1],
          latitudeDelta: 0,
          longitudeDelta: 0.005
        });
        setFocusedNumber(focusedNumber + 1);
      }
    } else if (direction === 'left') {
      if (focusedNumber > 0) {
        mapInstance.animateToRegion({
          latitude: list[focusedNumber - 1].location[0],
          longitude: list[focusedNumber - 1].location[1],
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
          latitude: list[focusedNumber].location[0],
          longitude: list[focusedNumber].location[1],
          latitudeDelta: 0,
          longitudeDelta: 0.005
        }}
      >
        {
          list.map((item, index) => {
            return (
              <Marker
                style={styles.mapMarker}
                key={item.location.latitude}
                coordinate={{
                  latitude: item.location[0],
                  longitude: item.location[1]
                }}
                onPress={() => {
                  setFocusedNumber(index);
                }}
              >
                {
                  index === focusedNumber &&
                  <View
                    style={styles.markerDim}
                  >
                    <Image
                      style={styles.markerPhoto}
                      source={{uri: list[focusedNumber].photo_url_list[0]}}
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
          <AntDesign
            name='left'
            size={24}
            color='white'
          />
        </TouchableOpacity>
        <Image
          style={styles.currentPhoto}
          source={{uri: list[focusedNumber].photo_url_list[0]}}
        />
        <TouchableOpacity
          onPress={() => changePhotoFocus('right')}
          style={styles.currentPhotoChangeButton}
        >
          <AntDesign
            name='right'
            size={24}
            color='white'
          />
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
  mapMarker: {
    zIndex: 90
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
    alignItems: 'center'
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
    borderRadius: 100
  },
  markerDim: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    zIndex: 100
  }
});
