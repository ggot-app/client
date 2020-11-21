import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ViewPager from '@react-native-community/viewpager';
import {
  Text,
  View,
  Modal,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import { getPhotosByUserId } from '../utils/api';
import { openModal, closeModal } from '../actions/index';

// const window = Dimensions.get('window');
// const screen = Dimensions.get('screen');

export default function MyPhoto() {
  const [ myPhotoList, setMyPhotoList ] = useState([]);
  const [ currentPhoto, setCurrentPhoto ] = useState([]); // 변수명이 적합하지 않음
  // const [ dimensions, setDimenstions ] = useState({ window, screen });

  const dispatch = useDispatch();

  const modalVisible = useSelector(state => state.modal.isModalOpened);
  const user_Id = useSelector(state => state.user.userData._id);

  // const onChange = ({ window, screen }) => {
  //   setDimenstions({ window, screen });
  // };

  // useEffect(() => {
  //   Dimensions.addEventListener('change', onChange);

  //   return () => {
  //     Dimensions.removeEventListener('change', onChange);
  //   };
  // });

  useEffect(() => {
    (async () => {
      try {
        const storedData = await getPhotosByUserId(user_Id); // 변수명어쩔..
        const { photos } = storedData;

        setMyPhotoList(photos);
      } catch (err) {
        console.warn(err);
      }
    })();
  }, []);

  return (
    <View style={styles.myPhotoWrapper}>
      <FlatList
        numColumns={3}
        keyExtractor={(item) => item.photo_url_list[0]}
        data={myPhotoList}
        // onEndReached={()=> {
        //   console.log(1);
        // }}
        // onEndReachedThreshold={0.5}
        style={styles.myPhotoList}
        renderItem={({ item }) => {
          return (
            <View style={styles.contentWrpper}>
              <TouchableOpacity
                style={styles.myPhoto}
                onPress={() => {
                  setCurrentPhoto(item.photo_url_list);
                  dispatch(openModal());
                }}
              >
                <Image
                  source={{
                    uri: item.photo_url_list[0]
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableHighlight
              style={styles.closeButton}
              onPress={() => {
                dispatch(closeModal());
              }}
            >
              <Text style={styles.buttonText}>
                X
              </Text>
            </TouchableHighlight>
            <ViewPager style={styles.viewPager} initialPage={0}>
              {
                currentPhoto.map((item, index) => {
                  return (
                    <View style={styles.photoWrapper} key={`${index}`}>
                      <Image
                        source={{
                          uri: `${item}`
                        }}
                        style={styles.modalImage}
                      />
                    </View>
                  );
                })
              }
            </ViewPager>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrpper: {
    flex: 1,
    height: '100%'
  },
  myPhotoWrapper: {
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  myPhotoList: {
    width: '100%',
    height: '100%'
  },
  myPhoto: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 1,
    marginBottom: 1
  },
  image: {
    width: '100%',
    height: '100%'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    height: '80%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  viewPager: {
    flex: 1,
    width: '100%'
  },
  photoWrapper: {
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '50%',
    aspectRatio: 1.2
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  closeButton: {
    borderRadius: 400,
    padding: 10,
    marginRight: 10
  }
});
