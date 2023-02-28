import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';

interface UpwardModalProps {
  toggleModal: Function;
  isModalVisible: boolean;
  handleLoginSubmit: Function;
}

const UpwardModal = ({
  toggleModal,
  isModalVisible,
  handleLoginSubmit,
}: UpwardModalProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          toggleModal();
        }}>
        <Text style={styles.button}>Show Modal</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          toggleModal;
        }}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>x</Text>
            <TouchableOpacity
              onPress={() => {
                toggleModal();
              }}>
              <Text style={styles.modalButton}>X</Text>
              <TextInput placeholder="Name" onChangeText={handleEmailChange} />
              <TextInput
                placeholder="Password"
                onChangeText={handlePasswordChange}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Button
                  color={'#FFFFFF'}
                  title="Log in"
                  onPress={() => {
                    handleLoginSubmit(email, password);
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 18,
    color: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: 400,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'rgba(0, 0, 0, 0.8)',

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

export default UpwardModal;
