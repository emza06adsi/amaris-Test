import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LoginForm from '../molecules/LoginForm';
import {login} from '../../redux/actions/authActions';
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import {Image, ScrollView} from 'react-native';
import {AxiosPath} from '../../api/axiosPath';
import Button from '../atoms/Button';
import Modal from 'react-native-modal';
import UpwardModal from '../templates/LoginModal';
import {fetchTvShows} from '../../redux/actions/tvActions';
import { TopRatedRequest } from '../../api/TopRated';
import { fetchTopRated } from '../../redux/actions/topRatedAction';
const LoginPage: React.FC = () => {
  const isLoggedIn = useSelector((state: any) => state.tvShows);
  const dispatch = useDispatch();
  const [imageTv, setIMage] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    isLoggedIn;
    setIMage(isLoggedIn?.tvShows[0]?.backdrop_path);
  }, [isLoggedIn]);

  const handleLoginSubmit = (email: string, password: string) => {
    dispatch(login(email, password) as any);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    dispatch(fetchTvShows() as any);
    dispatch(fetchTopRated() as any);
  }, []);

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <ImageBackground
        source={{uri: 'https://image.tmdb.org/t/p/w500' + imageTv}}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome!</Text>
          {!isModalVisible && (
            <Button color={'#FFD233'} title="Sing up" onPress={() => {}} />
          )}
          {!isModalVisible && (
            <Button color={'#FFFFFF'} title="Log in" onPress={toggleModal} />
          )}
          {!isModalVisible && (
            <Text style={styles.password}>Forgot password</Text>
          )}
        </View>
      </ImageBackground>
      <UpwardModal
        handleLoginSubmit={handleLoginSubmit}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  welcome: {
    color: '#FFFFFF',
    fontSize: 32,
    marginTop: 80,
    marginBottom: 100,
    fontWeight: '800',
  },
  password: {
    color: '#FFFFFF',
    fontSize: 24,
    marginTop: 40,
  },
});

export default LoginPage;
