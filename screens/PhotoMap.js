import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Image } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export default function PhotoMap({ route }) {
  const { data, focusNumber, fromModal } = route.params;

  const [ userPhotoData, setUserPhotoData ] = useState([]);
  const [ focusMarkNumber, setFocusMarkNumber ] = useState(0);

  useEffect(() => {
    if (fromModal) {
      const set = [
        {
          'description': '사진 1번입미다.',
          'location': {
            'lat': 37.505819,
            'lng': 127.057972,
          },
          'uriList': [
            'https://www.bloter.net/wp-content/uploads/2016/08/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0-%EC%82%AC%EC%A7%84.jpg',
            'https://rgo4.com/files/attach/images/2681740/851/579/024/0c2d684424cfdafca7ae9db913d3d46b.jpg',
          ],
        },
        {
          'description': '사진 2번입미다.',
          'location': {
            'lat': 37.505838,
            'lng': 127.056136,
          },
          'uriList': [
            'https://rgo4.com/files/attach/images/2681740/851/579/024/0c2d684424cfdafca7ae9db913d3d46b.jpg',
          ],
        },
        {
          'description': '사진 3번입미다.',
          'location': {
            'lat': 37.506181,
            'lng': 127.060024,
          },
          'uriList': [
            'https://www.ilovepc.co.kr/news/photo/201806/19539_35706_255.jpg',
          ],
        },
        {
          'description': '사진 4번입미다.',
          'location': {
            'lat': 37.507317,
            'lng': 127.060659,
          },
          'uriList': [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD1ofBKHSDriEDZWpnQsK5i-ZIFrAkNuxoA&usqp=CAU',
          ],
        },
      ];
      setUserPhotoData(set);
    }
    setFocusMarkNumber(focusNumber);
    setUserPhotoData(data);
  }, [userPhotoData]);

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: data[focusMarkNumber].location.latitude,
          longitude: data[focusMarkNumber].location.longitude,
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
    height: '100%'
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
    alignItems: 'center'
  },
  itemBox: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImage: {
    width: '100%',
    height: '100%'
  }
});
