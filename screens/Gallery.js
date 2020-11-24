import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as MediaLibrary from 'expo-media-library';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView
} from 'react-native';

import { countPhoto, deCountPhoto } from '../actions/index';
import { ALERT_NUMBER_OF_POSSIBLE_IMAGE_UPLOADS } from '../constants/index';

import Photo from '../components/Photo';
import SelectedPhoto from '../components/SelectedPhoto';

export default function Gallery() {
  const dispatch = useDispatch();

  const [ asset, setAsset ] = useState(null);
  const selectedList = useSelector(state => state.selectedPhotos.selectedList);

  const deSelectPhoto = (_, item) => {
    const filteredSelectedList = selectedList.filter(el => el.uri !== item.uri);
    return dispatch(deCountPhoto(filteredSelectedList));
  };
  const selectPhoto = (_, item) => {
    if (selectedList.filter(el => el.uri === item.uri).length) return deSelectPhoto(_, item);
    if (selectedList.length >= 5) return alert(ALERT_NUMBER_OF_POSSIBLE_IMAGE_UPLOADS);
    return dispatch(countPhoto([ ...selectedList, item ]));
  };
  const renderPhoto = ({ item }) => {
    return (
      <Photo
        item={item}
        selectedList={selectedList}
        selectPhoto={selectPhoto}
      />
    );
  };
  const renderSelectedPhoto = ({ item }) => {
    return (
      <SelectedPhoto
        item={item}
        deSelectPhoto={deSelectPhoto}
      />
    );
  };
  const getPhotos = async () => {
    try {
      const { assets } = await MediaLibrary.getAssetsAsync({
        first: 18,
        sortBy: MediaLibrary.SortBy.creationTime,
      });
      setAsset(assets);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    getPhotos();
  });

  return (
    <View style={styles.container}>
      {
        selectedList.length > 0 &&
        <View style={styles.selectedImageBox}>
          <FlatList
            style={styles.selectedList}
            data={selectedList}
            renderItem={renderSelectedPhoto}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      }
      <SafeAreaView style={styles.photoListContainer}>
        <FlatList
          data={asset}
          renderItem={renderPhoto}
          keyExtractor={item => item.uri}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  photoListContainer: {
    padding: 1,
    flex: 1,
    flexDirection: 'row'
  },
  selectedList: {
    width: 'auto'
  },
  selectedImageBox: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 80,
    backgroundColor: 'white'
  }
});
