import React, {useRef, useState, useCallback} from 'react';
import {
  Animated,
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  Easing,
  TouchableOpacity,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';

export const ModalScreen = () => {
  const screenHeight = Dimensions.get('window').height;
  const [blurViewHeight, setBlurViewHeight] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const materialEaseOut = Easing.bezier(0.0, 0, 0.2, 1);
  const materialEaseIn = Easing.bezier(0.4, 0, 1, 1);

  const startAnimation = useCallback(() => {
    if (blurViewHeight > 0) {
      const startValue = 0;
      const endValue = -(screenHeight + blurViewHeight) / 2;

      animatedValue.setValue(startValue);

      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: endValue,
          duration: 1000,
          easing: materialEaseOut,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: endValue,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: startValue,
          duration: 1000,
          easing: materialEaseIn,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [
    animatedValue,
    blurViewHeight,
    screenHeight,
    materialEaseOut,
    materialEaseIn,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/28374473/pexels-photo-28374473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.background}></ImageBackground>
      </View>

      <View style={styles.blurContainer}>
        <Animated.View
          style={[
            styles.animatedBlurView,
            {transform: [{translateY: animatedValue}]},
          ]}>
          <BlurView
            style={styles.blurView}
            blurType="light"
            blurAmount={15}
            reducedTransparencyFallbackColor="white"
            onLayout={event => {
              const {height} = event.nativeEvent.layout;
              setBlurViewHeight(height);
            }}
          />
          <Text style={styles.blurText}>Glassmorphism Effect</Text>
          <TouchableOpacity style={styles.button} onPress={startAnimation}>
            <Text style={styles.buttonText}>Start Animation</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 15,
    display: 'none',
    marginTop: 100,
    marginHorizontal: 20,
    padding: 20,
  },
  title: {
    color: '#242424',
    fontSize: 42,
    textAlign: 'center',
  },
  blurContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedBlurView: {
    width: 300,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(73, 202, 243, 0.2)',
  },
  blurText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(253,25,186, 0.5)',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
