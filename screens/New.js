import React, { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, View } from 'react-native';

export default function New() {
  const [text, setText] = useState('');

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.photoWrapper}>
        <Image
          source={{
            uri: 'http://www.bigtanews.co.kr/news/photo/201912/5195_9088_352.jpg'
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.mapWrapper}>
      </View>
      <View style={styles.descriptionWrapper}>
        <TextInput
          style={styles.input}
          placeholder='당신의 이야기를 입력해주세요.'
          multiline={true}
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
      </View>
      <View style={styles.buttonWrapper}>
      </View>
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
    alignItems: 'center',
    backgroundColor: 'black'
  },
  image: {
    width: '90%',
    height: '90%'
  },
  mapWrapper: {
    flex: 1,
    width: '95%',
    backgroundColor: 'grey'
  },
  descriptionWrapper: {
    flex: 0.8,
    width: '95%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black'
  },
  input: {
    height: 100,
    padding: 15,
    fontSize: 15
  },
  buttonWrapper: {
    flex: 0.5,
    width: '95%',
    backgroundColor: 'pink'
  }
});
