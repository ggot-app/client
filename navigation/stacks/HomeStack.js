import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home';
import PhotoMap from '../../screens/PhotoMap';

const HomeStack = createStackNavigator();

export default function HomeStackNavigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={Home}
        options={{
          headerTitle: () => (
            <View
              style={{ alignItems: 'center', flex: 1 }}
            >
              <Text style={{ color: '#2699FB' }}>
                내 주변 꽂
              </Text>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name='PhotoMap'
        component={PhotoMap}
      />
    </HomeStack.Navigator>
  );
}
