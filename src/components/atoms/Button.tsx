import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color: string;
}

const Button: React.FC<ButtonProps> = ({title, onPress, color}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        borderRadius: 100,
        padding: 20,
        width: 200,
        marginVertical: 10,
        marginTop: 15,
      }}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#191919',
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default Button;
