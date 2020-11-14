import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import New from '../../screens/New';

const NewStack = createStackNavigator();

export default function NewStackNavigation() {

  return (
    <NewStack.Navigator>
      <NewStack.Screen
        name='New'
        component={New}
      />
    </NewStack.Navigator>
  );
}