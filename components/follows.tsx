import { Text, View, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';



export default function Follows() {
  const [followers, setFollowers] = useState('10');
  const [following, setFollowing] = useState('6')

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.number}>{followers}</Text>
        <Text style={styles.text}>Followers</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.number}>{following}</Text>
        <Text style={styles.text}>Following</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(129, 169, 238, 0.50)',
    width: 261,
    height: 47,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 60,
    gap: 30,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  number: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});