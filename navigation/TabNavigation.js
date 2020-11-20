import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomeStack from './stacks/HomeStack';
import NewStack from './stacks/NewStack';
import MyPageStack from './stacks/MyPageStack';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'location-on';
          } else if (route.name === 'New') {
            iconName = 'add-circle-outline';
          } else  if (route.name === 'MyPage') {
            iconName = 'person-outline';
          }

          return <MaterialIcons name={iconName} size={size} color={color}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2699FB',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name='Home' component={HomeStack}/>
      <Tab.Screen name='New' component={NewStack}/>
      <Tab.Screen name='MyPage' component={MyPageStack}/>
    </Tab.Navigator>
  );
}
