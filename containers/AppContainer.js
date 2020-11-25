import React, { useEffect, useState, useRef } from 'react';
import Constants from 'expo-constants';
import { AppState } from 'react-native';
import * as Location from 'expo-location';
import * as TaskManger from 'expo-task-manager';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from '../components/LogIn';
import AxiosInstance from '../utils/axios';
import TabNavigation from '../navigation/TabNavigation';
import { getUserLogin } from '../actions/index';
import { LOGIN_DATA } from '../constants/index';
import { getDistanceFromLatLonInMeter } from '../utils/api';

const LOCATION_TRACKING = 'location-tracking';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

TaskManger.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  if (AppState.currentState !== 'background') return;
  let userPhotoList;

  if (error) {
    console.log('에러');
    return;
  }

  if (data) {
    const loginData = await AsyncStorage.getItem(LOGIN_DATA);

    if (loginData) {
      const { USER } = JSON.parse(loginData);
      userPhotoList = USER.photos;
    }
    const { locations } = data;
    let lat = locations[0].coords.latitude;
    let lng = locations[0].coords.longitude;
    console.log(lat, lng);
    console.log('##', AppState.currentState);

    // userPhotoList.filter(item => {
      const mockLat = 37.5059812;
      const mockLng = 127.059067;
      const distance = getDistanceFromLatLonInMeter(lat, lng, mockLat, mockLng);
      if (distance < 10) {
        (async function () {
          await schedulePushNotification();
        })();
        Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
      }
    // });
  }
});

export default AppContainer = () => {
  const [ expoPushToken, setExpoPushToken ] = useState('');
  const [ notification, setNotification ] = useState(false);

  const notificationListener = useRef();
  const responseListener = useRef();

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.user.isloggedIn);

  const getLogin = async () => {
    try {
      const loginData = await AsyncStorage.getItem(LOGIN_DATA);

      if (loginData) {
        const { TOKEN, USER } = JSON.parse(loginData);

        dispatch(getUserLogin(USER));
        AxiosInstance.defaults.headers.common['Authorization'] = TOKEN;
      }
    } catch (error) {
      console.warn(error);
    }
  };
  const startLocationTracking = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 0,
      foregroundService: {
        notificationTitle: '꽂 혔니?',
        notificationBody: '꽂 사진',
        notificationColor: 'black'
      }
    });
  };

  useEffect(() => {
    getLogin();
    startLocationTracking();

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      navigation.navigate('MyPage', { screen: 'MyPhoto'});
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  if (!isLoggedIn) return <Login />;

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '이 근처 당신의 사진이 \"꽂\" 혔습니다.',
      body: '여기서의 추억을 기억하시나요?',
      data: { data: 'goes' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification');

      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for push notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: 'yellow'
    });
  }

  return token;
}
