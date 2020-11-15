import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Button({ title, onChange }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onChange()}
      >
        <Text style={styles.text}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#BEDFF7',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    padding: 15
  },
  text: {
    fontSize: 12
  }
});
