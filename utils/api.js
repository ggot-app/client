import * as Google from 'expo-google-app-auth';
import axios from '../utils/axios';
import getEnvVars from '../environment';

const { GOOGLE_API_ID } = getEnvVars();

export const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: GOOGLE_API_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      const { email, photoUrl } = result.user;

      return getLogIn(email, photoUrl);
    } else {
      return { cancelled: true };
    }
  } catch (err) {
    return { error: true };
  }
};

const getLogIn = async (email, photoUrl) => {
  try {
    const response = await axios.post('/user/login', {
      email: email,
      profileUrl: photoUrl
    });
  } catch (err) {
    console.log(err);
  }
};
