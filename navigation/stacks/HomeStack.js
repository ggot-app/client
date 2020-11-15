import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, TouchableOpacity, Text } from 'react-native';

import Home from '../../screens/Home';

const HomeStack = createStackNavigator();

export default function HomeStackNavigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={Home}
        options={{
          headerTitle: () => (
            <View style={{ alignItems: 'center', flex: 1 }}>
              <TouchableOpacity
                onPress={() => alert('주변 사진 리스트 다시가져오기')}
              >
              <Text style={{ color: '#2699FB' }}>
                내 근처 3km
              </Text>
              </TouchableOpacity>
            </View>
          ),
          headerTitleStyle: {
            backgroundColor: 'red'
          }
        }}
      />
    </HomeStack.Navigator>
  );
}
