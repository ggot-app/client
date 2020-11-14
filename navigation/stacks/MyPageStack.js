import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyPage from '../../screens/MyPage';

const MyPageStack = createStackNavigator();

export default function MyPageStackNavigation() {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen
        name='MyPage'
        component={MyPage}
      />
    </MyPageStack.Navigator>
  );
}