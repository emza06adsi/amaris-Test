import React from 'react';
import {StyleSheet, View, Text, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Footer: React.FC = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text
            style={styles.modalButton}
            onPress={() => {
              navigation.navigate('HomeView' as never);
            }}>
            x
          </Text>

          <Text
            style={styles.modalButton}
            onPress={() => {
              navigation.navigate('FavoritesView' as never);
            }}>
            +{' '}
          </Text>
          <Text
            onPress={() => {
              navigation.navigate('RecentView' as never);
            }}
            style={styles.modalButton}>
            x
          </Text>
          <Text style={styles.modalButton}>x</Text>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: 80,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    with: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalButton: {
    fontSize: 16,
    color: '8C8C8C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
});

export default Footer;
