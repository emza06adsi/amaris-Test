import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Mi aplicación</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#191919',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;
