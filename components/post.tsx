import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, FlatList, StatusBar, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import {getPosts, likePost, unlikePost} from '../api/api'
import { FontAwesome } from '@expo/vector-icons';

type PostInfo = {
  content: string,
  username: string,
  likes: number[],
  userId:number,
  id: number,
  currUserId:number,
  token:string
}

export const Post = ({ content, username, likes, userId, id, currUserId, token}: PostInfo) => {
  const initial = username ? username.charAt(0).toUpperCase() : "?";
  const [liked, setLiked] = useState(likes.includes(currUserId));
  const [likeCount, setLikeCount] = useState(likes.length);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      unlikePost(id, token)
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      likePost(id, token)
      setLikeCount(prev => prev + 1);
    }
  };

  const handleAvatarPress = () => {
    console.log("Avatar Press")
  }

  return (
    <View style={styles.card}>
      <Text style={styles.usernameTitle}>{username}</Text>
      <View style={styles.bodyContainer}>
        <Pressable style={styles.avatar} onPress={handleAvatarPress}>
          <Text style={styles.avatarText}>{initial}</Text>
        </Pressable>
        <Text style={styles.content}>{content}</Text>
      </View>
      <View style={styles.footer}>
        <Pressable onPress={toggleLike} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome 
            name={liked ? "star" : "star-o"}
            size={20} 
            color={liked ? "#5E83FB" : "#5E83FB"} 
          />
          <Text style={styles.likesText}>{likeCount} stars</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  usernameTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
  },
  bodyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FCD385',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
    flex: 1,
    flexWrap: 'wrap',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    fontSize: 14,
    color: '#5E83FB',
    fontWeight: '500',
  }
});

export default Post;