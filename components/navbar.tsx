import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PostButton from './postButton'

export default function Navbar() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('AllPosts');

  const tabs = [
    {name: 'AllPosts', icon: require('../assets/homeIcon.png')},
    {name: 'Feed', icon: require('../assets/followsIcon.png')},
    {name: 'Profile', icon: require('../assets/User.png')}
  ];

  const handlePress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName);
  };

  return (
    <View style={styles.container}>
      <PostButton />
      <View style={styles.nav}>
        {tabs.map((tab) => (
          <TouchableOpacity 
            key={tab.name} 
            onPress={() => handlePress(tab.name)}
            style={styles.tabButton}
          >
            <Image 
              source={tab.icon} 
              style={[
                styles.icon, 
                activeTab === tab.name && styles.activeIcon
              ]} 
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 120,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 3,
    borderColor: '#FFF2D0',
    borderBottomWidth: 0,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#666',
  },
  activeIcon: {
    tintColor: '#81A9EE',
  },
});
