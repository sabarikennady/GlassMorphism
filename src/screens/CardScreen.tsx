import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {BlurView} from '@react-native-community/blur';

export const CardScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
      style={styles.container}
      blurRadius={10}>
      <BlurView blurType="light" blurAmount={10}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardType}>Credit Card</Text>
          <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
          <Text style={styles.cardHolderLabel}>Card Holder</Text>
          <Text style={styles.cardHolder}>John Doe</Text>
        </View>
      </BlurView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  cardContainer: {
    justifyContent: 'flex-start',
    width: 350,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  cardType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right',
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  cardHolderLabel: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'left',
    marginTop: 20,
    opacity: 0.7,
  },
  cardHolder: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
    fontWeight: '500',
  },
});
