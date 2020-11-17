import React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import New from '../../screens/New';
import Gallery from '../../screens/Gallery';

const NewStack = createStackNavigator();

export default function NewStackNavigation() {
  const selectedPhotoList = useSelector(state => state.selectedPhotos.selectedList);

  return (
    <NewStack.Navigator>
      <NewStack.Screen
        name='Gallery'
        component={Gallery}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.nextButtonContainer}>
              <Text style={styles.photoCount}>
                {
                  `(${selectedPhotoList.length} / 5)`
                }
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('New', { selectedPhotoList })}
                style={styles.nextButton}
              >
                <Text style={{ color: '#2699FB' }}>
                  다음
                </Text>
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <NewStack.Screen
        name='New'
        component={New}
      />
    </NewStack.Navigator>
  );
}

const styles = StyleSheet.create({
  nextButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  nextButton: {
    margin: 15,
  },
  photoCount: {
    textAlignVertical: 'center'
  }
});
