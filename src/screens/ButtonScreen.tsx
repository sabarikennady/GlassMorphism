import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const Button = ({title, backgroundColor}: any) => (
  <TouchableOpacity style={[styles.button, {backgroundColor}]}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export const ButtonScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
      style={styles.container}
      blurRadius={10}>
      <Button title="Standard" backgroundColor="rgba(0, 123, 255, 0.5)" />
      <Button title="Accept" backgroundColor="rgba(40, 167, 69, 0.5)" />
      <Button title="Decline" backgroundColor="rgba(220, 53, 69, 0.5)" />
      <Button title="Inactive" backgroundColor="rgba(108, 117, 125, 0.5)" />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    width: '60%',
    height: 55,
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
