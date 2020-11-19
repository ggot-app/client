import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Map from '../components/Map';

export default function Location({ navigation, route }) {
  return (
    <View style={styles.locationWrapper}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  locationWrapper: {
    flex: 1
  }
});
