import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';

const Button = ({title, onPress}: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, {backgroundColor: 'rgba(255, 255, 255, 0.2)'}]}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export const HomeScreen = ({navigation}: any) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/813871/pexels-photo-813871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
      style={styles.container}
      blurRadius={100}>
      <Button
        title="Credit/Debit Card"
        onPress={() => navigation.navigate('CardScreen')}
      />
      <Button
        title="Button Variants"
        onPress={() => navigation.navigate('ButtonScreen')}
      />
      <Button
        title="Voucher"
        onPress={() => navigation.navigate('VoucherScreen')}
      />
      <Button
        title="Modal Animation"
        onPress={() => navigation.navigate('ModalScreen')}
      />
      <Button title="Icons" onPress={() => navigation.navigate('IconScreen')} />
      <Button
        title="Profile Screen"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
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
