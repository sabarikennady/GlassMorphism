import React from 'react';
import {StyleSheet, ImageBackground, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconNames = [
  'star-four-points-outline',
  'abacus',
  'alarm-light-outline',
  'alien',
  'bowling',
  'campfire',
  'motorbike',
  'airplane',
  'camera',
  'car',
  'cloud',
  'cog',
  'desktop-tower-monitor',
  'email',
  'flower',
  'fire',
  'github',
  'guitar',
  'headphones',
  'home',
  'keyboard',
  'lamp',
  'laptop',
  'leaf',
  'lightbulb',
  'map',
  'microphone',
  'mountain',
  'music-note',
  'paperclip',
  'phone',
  'piano',
  'planet',
  'plus',
  'radio',
  'rocket',
  'scissors',
  'share',
  'shield',
  'shopping',
  'snowflake',
  'sun',
  'television',
  'trophy',
  'umbrella',
  'video',
  'vimeo',
  'volleyball',
  'wifi',
  'watch',
  'wifi-strength-1',
  'wifi-strength-2',
  'wifi-strength-3',
  'wifi-strength-4',
  'battery',
  'bell',
  'car-door',
  'cloud-download',
  'cloud-upload',
  'email-open',
  'glasses',
  'hammer',
  'headset',
  'heart',
  'home-automation',
  'lightning-bolt',
  'lock',
  'map-marker',
  'microphone-settings',
  'mountain-biking',
  'music',
  'notebook',
  'palette',
  'pencil',
  'phone-in-talk',
  'plus-circle',
  'rocket-launch',
  'scissors-cutting',
  'shopping-cart',
  'snowman',
  'star',
  'sunshine',
  'tree',
  'upload',
  'volume-high',
  'volume-low',
  'wifi-off',
  'zoom-in',
  'zoom-out',
  'cloud-sync',
  'download',
  'file',
  'heart-outline',
  'pause',
  'play',
  'record',
  'refresh',
  'reload',
  'search',
  'server',
  'shield-outline',
  'star-outline',
  'thumb-up',
  'thumb-down',
  'toilet',
  'toolbox',
  'tune',
  'water',
  'weight',
  'wrench',
  'air-filter',
  'bike',
  'bus',
];

export const IconScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/626163/pexels-photo-626163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
      style={styles.screenContainer}
      blurRadius={50}>
      <View style={[styles.iconGrid, {width: screenWidth}]}>
        {iconNames.map((icon, index) => (
          <Icon
            key={index}
            name={icon}
            size={40}
            color={`rgba(${(index * 10) % 255}, ${(index * 20) % 255}, ${
              (index * 30) % 255
            }, 0.7)`}
            style={[
              styles.icon,
              index % 2 === 0 ? styles.iconLight : styles.iconDark,
            ]}
          />
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    margin: 5,
  },
  iconDark: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 5,
  },
  iconLight: {
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 5,
  },
});
