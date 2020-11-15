import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { signInWithGoogleAsync } from '../utils/api';

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => signInWithGoogleAsync(dispatch, navigation)}
      >
        <Text>google login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: "#DDDDDD",
    padding: 10,
  }
});
