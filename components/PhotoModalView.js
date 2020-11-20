import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ViewPager from '@react-native-community/viewpager';
import { AntDesign } from '@expo/vector-icons';

import { setPhotoFocus } from '../actions/index';

export default function PhotoModal({ navigation, setModalVisible }) {
  const dispatch = useDispatch();
  const photoData = useSelector(state => state.photosByLocation.photoData);
  const focusedNumber = useSelector(state => state.photosByLocation.focusedNumber);
  const [ currentPageNumber, setCurrentPageNumber ] = useState(0);

  return (
    <View
      style={styles.modalDim}
      onPress={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={styles.modalCloseButton}
          onPress={() => setModalVisible(false)}
        >
          <AntDesign name="closecircleo" size={24} color='white' />
        </TouchableOpacity>
        <ViewPager
          style={styles.modalImageContainer}
          initialPage={0}
          onPageSelected={(e)=> setCurrentPageNumber(e.nativeEvent.position)}
        >
          {
            photoData[focusedNumber].uriList.map((uri, i) => {
              return (
                <View
                  style={styles.modalImageBox}
                  key={i}
                >
                  <Image
                    style={styles.modalImage}
                    source={{ uri }}
                  />
                </View>
              );
            })
          }
        </ViewPager>
        <View style={styles.modalImageIndicator}>
          {
            photoData[focusedNumber].uriList.map((_, i) => {
              return (
                <View
                  key={i}
                  style={[styles.indicatorDot, currentPageNumber === i ? styles.indicatorDotCurrent : styles.indicatorDot ]}
                />
              );
            })
          }
        </View>
        <View style={styles.modalDescription}>
          <Text>
            {photoData[focusedNumber].description}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.modalMapViewContainer}
          onPress={() => {
            setModalVisible(false);
            dispatch(setPhotoFocus(currentPageNumber));
            navigation.push('PhotoMap');
          }}
        >
          <MapView
            style={styles.modalMapView}
            initialRegion={{
              latitude: photoData[focusedNumber].location.lat,
              longitude: photoData[focusedNumber].location.lng,
              latitudeDelta: 0,
              longitudeDelta: 0.005
            }}
            scrollEnabled={false}
          >
            <Marker
              coordinate={{
                latitude: photoData[focusedNumber].location.lat,
                longitude: photoData[focusedNumber].location.lng,
              }}
            />
          </MapView>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalCloseButton: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  modalCloseText: {
    color: 'white',
  },
  modalDim: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '95%',
    height: '80%',
  },
  modalMapViewContainer: {
    width: '100%',
    height: 100,
  },
  modalMapView: {
    width: '100%',
    height: '100%',
  },
  modalImageContainer: {
    width: '100%',
    aspectRatio: 1,
  },
  modalImageIndicator: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 10,
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  indicatorDot: {
    margin: 2,
    width: 6,
    height: 6,
    borderRadius: 100,
    borderWidth: 0.5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  indicatorDotCurrent: {
    margin: 2,
    width: 6,
    height: 6,
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: 'magenta'
  },
  modalDescription: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImageBox: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
});
