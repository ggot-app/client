import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyPage from '../../screens/MyPage';
import MyPhoto from '../../screens/MyPhoto';

const MyPageStack = createStackNavigator();

export default function MyPageStackNavigation() {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen
        name='MyPage'
        component={MyPage}
        options={{
          title: 'My page',
          headerTitleAlign: 'center'
        }}
      />
      <MyPageStack.Screen
        name='MyPhoto'
        component={MyPhoto}
        options={{
          title: 'My Photo',
          headerTitleAlign: 'center'
        }}
      />
    </MyPageStack.Navigator>
  );
}
