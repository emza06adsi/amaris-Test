import {Alert} from 'react-native/types';
import {User} from './userTypes';

export const authenticateUser = async (
  email: string,
  password: string,
): Promise<User> => {
  const users: [] = require('./user.json');
  const user = users.find((user: {email: string; password: string}) => {
    return user.email === email && user.password === password;
  });
  if (user === undefined) {
    return Promise.reject(new Error('Error'));
  }
  return Promise.resolve({email, password});
};
