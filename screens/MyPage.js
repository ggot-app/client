import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, Image, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getUserLogout } from '../actions/index';

import Button from '../components/Button';
import { LOGIN_DATA } from '../constants';

export default function MyPage({ navigation }) {
  const userData = useSelector(state => state.user.userData);
  const dispatch = useDispatch();
  const logOut = () => {
    (async function () {
      try {
        await AsyncStorage.removeItem(LOGIN_DATA);
      } catch (error) {
        console.warn(e);
      }
    })();

    dispatch(getUserLogout());
  };
  const buttonProperties = [
    {title: '내 꽃', func: () => navigation.navigate('Home')},
    {title: '남 꽃', func: () => console.log('남 꽃 버튼입니다')},
    {title: '로그아웃', func: logOut},
    {title: '회원탈퇴', func: () => console.log('회원탈퇴 버튼입니다')}
  ];

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: `${userData.profile_url}`
          }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100
          }}
        />
        <Text style={styles.emailContainer}>
          {userData.email}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {
          buttonProperties.map((item, key) => {
            return (
              <Button
                title={item.title}
                onChange={item.func}
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
    alignItems: 'center'
  },
  profileContainer: {
    flex: 2,
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BEDFF7'
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
