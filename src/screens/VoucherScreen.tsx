import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const VoucherScreen = () => {
  const [voucherValue, setVoucherValue] = useState(0);

  useEffect(() => {
    setVoucherValue(Math.floor(Math.random() * 50) + 10);
  }, []);

  const handleRedeem = () => {
    setVoucherValue(Math.floor(Math.random() * 50) + 10);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
      style={styles.screenContainer}
      blurRadius={5}>
      <LinearGradient
        colors={['#A020F0', '#FF69B4']}
        style={styles.voucherContainer}>
        <Text style={styles.titleText}>🎉 Congratulations! 🎉</Text>
        <Text style={styles.voucherText}>
          You've won a<Text style={styles.voucherValue}> {voucherValue}% </Text>
          discount!
        </Text>
        <Text style={styles.subText}>Redeem your gift now!</Text>
        <TouchableOpacity style={styles.redeemButton} onPress={handleRedeem}>
          <Text style={styles.redeemButtonText}>Redeem Again</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  voucherContainer: {
    width: 350,
    height: 250,
    borderRadius: 25,
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    overflow: 'hidden',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  voucherText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  voucherValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700', // Gold color for voucher value
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  redeemButton: {
    backgroundColor: '#FF69B4',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 5,
    borderColor: '#A020F0',
  },
  redeemButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
