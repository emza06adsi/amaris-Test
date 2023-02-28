import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../components/pages/LoginPage';
import {RootState} from '../redux/reducers/rootReducer';
import {connect, useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import {AxiosPath} from '../api/axiosPath';
import NavigatorHome from './StackNavigatorHome';

const Stack = createNativeStackNavigator();

const Navigator: React.FC<any> = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  useEffect(() => {
    StatusBar.setBackgroundColor('#191919');
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(false);
  }, []);

  useEffect(() => {
    isLoggedIn;
  }, [isLoggedIn]);

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginPage}
          />
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={NavigatorHome}
          />
        )}
      </Stack.Navigator>
    </View>
  );
};

export default Navigator;
