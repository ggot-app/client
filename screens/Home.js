import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.mapWrapper}></View>
      <View style={styles.photoListWrapper}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  mapWrapper: {
    width: '100%',
    flex: 1,
    backgroundColor: 'yellow',
    margin: 10,
  },
  photoListWrapper: {
    width: '100%',
    flex: 3,
    backgroundColor: 'green',
  },
});
