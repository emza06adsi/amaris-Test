import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../components/pages/LoginPage';
import {RootState} from '../redux/reducers/rootReducer';
import {connect, useSelector} from 'react-redux';
import {StatusBar, Modal} from 'react-native';
import {AxiosPath} from '../api/axiosPath';
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';
import HomePage from '../components/pages/HomePage';

const Stack = createNativeStackNavigator();

const NavigatorHome: React.FC<any> = () => {
  return (
    <>
      <View style={{flex:1}}>
        <Header></Header>
        <Stack.Navigator initialRouteName="HomeView">
          <Stack.Screen
            options={{headerShown:false}}
            name="HomeView"
            component={HomePage}

          />
          <Stack.Screen
            options={{headerShown: true}}
            name="FavoritesView"
            component={() => <Text>FavoritesView</Text>}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="RecentView"
            component={() => <Text>RecentView</Text>}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Details"
            component={() => <Text>Details</Text>}
          />
        </Stack.Navigator>
      </View>
      <Footer />
    </>
  );
};

export default NavigatorHome;
