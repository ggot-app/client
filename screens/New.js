import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  Modal,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';

import Button from '../components/Button';
import Map from '../components/Map';
// import { creatingNewPhoto } from '../utils/api';

export default function New({ navigation }) {
  // newPage로 photoURL location이 넘어와야함
  // 바닐라코딩 37.506059 127.059130
  const [description, setDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.photoWrapper}>
        <Image
          source={{
            uri: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99D8E6495DF3A01901'
          }}
          style={styles.apple}
          />
      </View>
      <TouchableOpacity
        style={styles.mapWrapper}
        onPress={() => navigation.navigate('Location')}
        >
        <Map />
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
        <Button
          title='사진 등록하기'
          onChange={() =>
            setModalVisible(true)
          }
        />
      </View>
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
            <Text style={styles.modalText}>
              Hi
            </Text>
            <TouchableHighlight style={{...styles.openButton}}
              onPress={() => {
                navigation.navigate('MyPage');
                setModalVisible(!modalVisible)
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
    alignItems: 'center',
  },
  photoWrapper: {
    flex: 2,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  apple: {
    width: '80%',
    height: '80%'
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
    width: '95%'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.7,
    alignItems: 'center',
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
    textAlign: 'center'
  },
  modalText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center'
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
