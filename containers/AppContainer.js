import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from '../navigation/TabNavigation';

export default AppContainer = () => {
  // const isLogin = useSelector(state => state.user.isLogin);

  // if (!isLogin) {
  //   return (

  //   );
  // }

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );

  return;
};