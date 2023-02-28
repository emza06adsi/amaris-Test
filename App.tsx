import React from 'react';
import {Provider} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginPage from './src/components/pages/LoginPage';
import Navigator from './src/navigator/StackNavigator';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers/rootReducer';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenProps = {
  navigation: any;
};

type DetailsScreenProps = {
  navigation: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;