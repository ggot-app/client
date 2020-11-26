import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Facebook from 'expo-facebook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import Button from '../components/Button';
import { LOGIN_DATA } from '../constants';

export default function MyPage({ navigation }) {
  const userData = useSelector(state => state.user.userData);

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem(LOGIN_DATA);
      await Facebook.logOutAsync();
    } catch (e) {
      console.warn(e);
    }
  };
  const onChangeMyPhoto = () => navigation.navigate('MyPhoto');

  const buttonTypes = [
    {title: '내 꽂', property: onChangeMyPhoto},
    {title: '로그아웃', property: logOut}
  ];

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: userData.profile_url}}
          style={styles.image}
        />
        <Text style={styles.emailContainer}>
          {userData.email}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {
          buttonTypes.map((item, key) => {
            return (
              <Button
                title={item.title}
                onChange={item.property}
                key={key}
              />
            );
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F0'
  },
  profileContainer: {
    flex: 2,
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BEDFF7'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  emailContainer: {
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 15
  },
  buttonContainer: {
    flex: 2,
    width: '80%',
    marginBottom: 40
  }
});
