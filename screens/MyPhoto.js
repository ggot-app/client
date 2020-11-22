import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  View,
  Modal,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { getPhotosByUserId } from '../utils/api';
import PhotoModalView from '../components/PhotoModalView';

// const window = Dimensions.get('window');
// const screen = Dimensions.get('screen');

export default function MyPhoto({ navigation }) {
  const [ myPhotoList, setMyPhotoList ] = useState([]);
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ focusedPhotoNumber, setFocusedPhotoNumber ] = useState(0);
  // const [ dimensions, setDimenstions ] = useState({ window, screen });

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

  const renderItem = ({ index, item }) => {
    return (
      <View style={styles.contentWrpper}>
        <TouchableOpacity
          style={styles.myPhoto}
          onPress={() => {
            setIsModalVisible(true);
            setFocusedPhotoNumber(index);
          }}
        >
          <Image
            style={styles.photo}
            source={{ uri: item.photo_url_list[0] }}
          />
        </TouchableOpacity>
      </View>
    );
  };

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
        data={myPhotoList}
        renderItem={renderItem}
        style={styles.myPhotoList}
        keyExtractor={(item) => item.photo_url_list[0]}
        // onEndReached={()=> {
        //   console.log(1);
        // }}
        // onEndReachedThreshold={0.5}
      />
      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalVisible}
      >
        <PhotoModalView
          photoList={myPhotoList}
          navigation={navigation}
          setIsModalVisible={setIsModalVisible}
          focusedPhotoNumber={focusedPhotoNumber}
        />
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
  photo: {
    width: '100%',
    height: '100%'
  }
});
