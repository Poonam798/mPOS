import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const register = (input) => {
  console.log(input);
  return {
    type: 'REGISTER',
    payload: axios.post(Util.BASE_URL + 'user/register/',input)
  };
};

export const login = (input) => {
  return {
    type: 'LOGIN',
    payload: axios.post(Util.BASE_URL + 'user/login/',input)
  };
};

export const getItem = () => {
  return {
    type: 'ITEM',
    payload: AsyncStorage.getItem('user')
  }
}
