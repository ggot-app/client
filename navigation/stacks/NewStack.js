import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import New from '../../screens/New';
import Location from '../../screens/Location';
import Gallery from '../../screens/Gallery';

const NewStack = createStackNavigator();

export default function NewStackNavigation() {
  const selectedPhotoList = useSelector(state => state.selectedPhotos.selectedList);
  const userMarkedLocation = useSelector(state => state.user.coords);

  return (
    <NewStack.Navigator
      screenOptions={{
        headerLeft: false
      }}
    >
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
                style={styles.gelleryNextButton}
              >
                <Text style={{ color: '#2699FB' }}>
                  {
                    selectedPhotoList.length ? '다음' : ''
                  }
                </Text>
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <NewStack.Screen
        name='New'
        component={New}
        options={({ route, navigation }) => ({
          headerLeft: () => (
            <View style={styles.locationNextButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Gallery')}
              >
              <Text>
                뒤로가기
              </Text>
              </TouchableOpacity>
            </View>
          )
        })}
      />
      <NewStack.Screen
        name='Location'
        component={Location}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <View style={styles.locationNextButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('New', { userMarkedLocation })}
              >
              <Text>
                설정
              </Text>
              </TouchableOpacity>
            </View>
          )
        })}
      />
    </NewStack.Navigator>
  );
}

const styles = StyleSheet.create({
  nextButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  locationNextButton: {
    marginRight: 15,
  },
  gelleryNextButton: {
    margin: 15,
  },
  photoCount: {
    textAlignVertical: 'center'
  }
});
