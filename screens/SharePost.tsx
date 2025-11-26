import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import bgCreatePost from '../assets/createPost.png';
import BackButton from '../components/backButton';
import {createPost} from '../api/api';

export default function SharePost({token}:{token:string}) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreatePost = async () => {
    if (content.trim().length === 0) {
      Alert.alert('Error', 'Post content cannot be empty');
      return;
    }

    setLoading(true)

    try {
      await createPost(content, token);
      Alert.alert('Success', 'Post shared successfully!');
      setContent('');
    } catch (error) {
      Alert.alert('Error', 'Failed to share post');
    }finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={bgCreatePost}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <BackButton />
        <View style={styles.messagePost}>
          <TextInput
            placeholder="Share your thoughts..."
            placeholderTextColor="rgba(170, 180, 231, 0.5)"
            style={styles.messageBox}
            multiline
            blurOnSubmit={true}
            onSubmitEditing={() => Keyboard.dismiss()}
            value={content}
            onChangeText={setContent}
          />
          <TouchableOpacity 
            style={[styles.postButton, loading && styles.disabledButton]} 
            onPress={handleCreatePost}
            disabled={loading}
          >
            <Text style={styles.textPostButton}>{loading ? 'POSTING...' : 'POST'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: 184,
  },
  messagePost: {
    alignItems: 'center',
  },
  messageBox: {
    width: 370,
    height: 275,
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    color: '#3A4682',

    borderRadius: 10,

    shadowColor: 'rgba(9, 15, 20, 1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,

    fontSize: 15,
    fontFamily: 'Manjari',
  },
  postButton: {
    alignSelf: 'center',
    width: 214,
    height: 55,
    margin: 10,
    backgroundColor: '#FFF2D0',

    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#81A9EE',

    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,

    justifyContent: 'center',
    alignItems: 'center',
  },
  textPostButton: {
    fontSize: 25,
    color: '#81A9EE',
    fontFamily: 'ManjariBold',
  },
  disabledButton: {
    opacity: 0.6,
  },
});
