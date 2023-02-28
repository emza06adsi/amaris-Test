import React from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';

interface TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({placeholder, onChangeText}) => {
  return (
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    marginVertical: 10,
    width: '100%',
    zIndex: -10,
    position: 'relative',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: -5,
    marginTop: 20,
    borderColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    color: '#FFFFFF',
  },
});

export default TextInput;
