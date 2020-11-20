import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ViewPager from '@react-native-community/viewpager';
import { format } from 'date-fns';
import {
  View,
  Text,
  Alert,
  Modal,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import Map from '../components/Map';
import { creatingNewPhoto } from '../utils/api';

export default function New({ route, navigation }) {
  const { selectedPhotoList } = route.params;
  const [ description, setDescription ] = useState('');
  const [ modalVisible, setModalVisible ] = useState(false);

  const user_email = useSelector(state => state.user.userData.email);
  const user_Id = useSelector(state => state.user.userData._id);

  const currentDate = format(new Date(), 'yyyy-MM-dd');
  const markedLocation = { latitude: 37.506059, longitude: 127.059130 };
  const photoUrlList = selectedPhotoList.map(item => {
    return {
      uri: item.uri,
      fileName: item.filename
    };
  });
  const photoInfo = {
    resistered_by: user_email,
    location: markedLocation,
    description: description,
    published_at: currentDate
  };

  return (
    <View style={styles.contentWrapper}>
      <ViewPager style={styles.viewPagerWrapper} initialPage={0}>
        {
          photoUrlList.map((item, index) => {
            return (
              <View style={styles.photoWrapper} key={`${index}`}>
                <Image
                  source={{
                    uri: `${item.uri}`
                  }}
                  style={styles.image}
                />
              </View>
            );
          })
        }
      </ViewPager>
      <TouchableOpacity
        style={styles.mapWrapper}
        onPress={() => navigation.navigate('Location')}
      >
        <Map isScrollEnabled={false} />
      </TouchableOpacity>
      <View style={styles.descriptionWrapper}>
        <TextInput
          style={styles.input1}
          placeholder='당신의 이야기를 입력해주세요.'
          multiline={true}
          onChangeText={description => setDescription(description)}
          defaultValue={description}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.enroll}
          onPress={() => {
            creatingNewPhoto(user_Id, photoInfo, photoUrlList);
            setModalVisible(true);
          }}
        >
          <Text style={styles.text}>
            사진등록하기
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Hi
            </Text>
            <TouchableHighlight
              style={{ ...styles.openButton }}
              onPress={() => {
                navigation.navigate('MyPage');
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.buttonText}>
                Hide Modal
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewPagerWrapper: {
    flex: 2,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  photoWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '85%',
    height: '85%'
  },
  mapWrapper: {
    flex: 1,
    width: '95%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionWrapper: {
    flex: 0.8,
    width: '95%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    borderColor: 'black'
  },
  input1: {
    height: 100,
    padding: 15,
    fontSize: 15
  },
  buttonWrapper: {
    flex: 0.5,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  enroll: {
    width: '100%',
    backgroundColor: '#BEDFF7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  text: {
    fontSize: 15
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.7,
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  openButton: {
    backgroundColor: 'black',
    marginTop: 80,
    borderRadius: 10,
    padding: 20,
    elevation: 2
  }
});
