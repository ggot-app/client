import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import LogIn from './containers/LogIn';

export default function App() {
  useEffect(() => {
    (async () => {
      try {
        const { status } = await Permissions.askAsync(
          Permissions.LOCATION,
          Permissions.CAMERA,
          Permissions.CAMERA_ROLL
        );
        if (status !== 'granted') {
          alert('접근 권한을 설정해주세요')
        }
      } catch (err) {
        console.warn(err);
      }
    })();
  },[]);

  return (
    <View style={styles.container}>
      <LogIn />
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
  }
});

function apple () {

}