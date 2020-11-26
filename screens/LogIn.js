import React from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { signInFacebook } from '../utils/facebookLogIn';

export default function LogIn() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => signInFacebook(dispatch)}
      >
        <Text>FACEBOOK LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
