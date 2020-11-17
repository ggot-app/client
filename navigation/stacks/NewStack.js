import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import New from '../../screens/New';
import Location from '../../screens/Location';

const NewStack = createStackNavigator();

export default function NewStackNavigation() {
  return (
    <NewStack.Navigator
      screenOptions={{
        headerLeft: false
      }}
    >
      <NewStack.Screen
        name='New'
        component={New}
      />
      <NewStack.Screen
        name='Location'
        component={Location}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => navigation.navigate('New')}
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
  button: {
    marginRight: 15,
  },
});
