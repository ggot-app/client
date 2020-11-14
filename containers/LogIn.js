import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { signInWithGoogleAsync } from '../utils/api';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title='Google LogIn'
          onPress={() => signInWithGoogleAsync()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
