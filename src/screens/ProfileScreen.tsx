import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';

export const ProfileScreen = () => {
  const menuItems = [
    {id: 1, title: 'Privacy Policy', icon: 'shield-lock-outline'},
    {id: 2, title: 'Settings', icon: 'cog-outline'},
    {id: 3, title: 'Logout', icon: 'logout'},
    {id: 4, title: 'Help & Support', icon: 'lifebuoy'},
    {id: 5, title: 'About Us', icon: 'information-outline'},
  ];

  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/2376799/pexels-photo-2376799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
      style={styles.screenContainer}
      blurRadius={6}>
      <BlurView blurAmount={5}>
        <View style={styles.headerContainer}>
          <Icon name="face-woman" size={64} color="rgba(255, 255, 255, 0.5)" />
          <View style={styles.headerTextContainer}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileDetail}>john.doe@example.com</Text>
          </View>
        </View>
      </BlurView>

      <FlatList
        data={menuItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.menuItem}>
            <Icon
              name={item.icon}
              style={styles.menuIconContainer}
              size={24}
              color="rgb(129, 218, 245)"
            />
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.menuList}
      />

      <Text style={styles.versionText}>App Version 1.0.0</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingLeft: 10,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  gravatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
  },
  headerTextContainer: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(129, 218, 245)',
  },
  profileDetail: {
    fontSize: 16,
    color: '#fff',
  },
  menuList: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  menuIconContainer: {
    padding: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    color: '#fff',
  },
  versionText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'right',
    marginTop: 20,
  },
});
