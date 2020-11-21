import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import ViewPager from '@react-native-community/viewpager';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function PhotoModalView({
  photoList,
  navigation,
  setModalVisible,
  focusedPhotoNumber
}) {
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
            photoList[focusedPhotoNumber].uriList.map((uri, i) => {
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
            photoList[focusedPhotoNumber].uriList.map((_, i) => {
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
            {photoList[focusedPhotoNumber].description}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.modalMapViewContainer}
          onPress={() => {
            setModalVisible(false);
            navigation.navigate('PhotoMap', { photoList, focusedPhotoNumber });
          }}
        >
          <MapView
            style={styles.modalMapView}
            initialRegion={{
              latitude: photoList[focusedPhotoNumber].location.lat,
              longitude: photoList[focusedPhotoNumber].location.lng,
              latitudeDelta: 0,
              longitudeDelta: 0.005
            }}
            scrollEnabled={false}
          >
            <Marker
              coordinate={{
                latitude: photoList[focusedPhotoNumber].location.lat,
                longitude: photoList[focusedPhotoNumber].location.lng,
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
    alignItems: 'center'
  },
  modalCloseText: {
    color: 'white'
  },
  modalDim: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: '95%',
    height: '80%'
  },
  modalMapViewContainer: {
    width: '100%',
    height: 100
  },
  modalMapView: {
    width: '100%',
    height: '100%'
  },
  modalImageContainer: {
    width: '100%',
    aspectRatio: 1
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
    borderBottomWidth: 0.5
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
    alignItems: 'center'
  },
  modalImageBox: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalImage: {
    width: '100%',
    height: '100%'
  }
});
