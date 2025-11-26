import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, FlatList, StatusBar, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import {getPosts} from '../api/api'
import backgroundImg from '../assets/allPosts.png';
import {Post} from '../components/post'

type PostResponse = {
  id:number,
  content:string,
  created_at:string,
  updated_at:string,
  user_id:number,
  username:string,
  likes:number[]
}

export default function AllPosts({userId, token}:{userId:number, token:string}) {
  
  const [isLoading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try{
      const data = await getPosts(token);
      setPosts(data)
    }catch(error){
      console.error(error)
    }finally{
      setLoading(false)
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground source={backgroundImg} resizeMode='cover' style={styles.image}>
        {
          isLoading ? (
            <ActivityIndicator size="large" color="#0000ff"/>
          ) : (
            <FlatList
              data={posts}
              keyExtractor={item => item.id}
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingTop: 140,
                paddingBottom: 40, 
              }} 
              renderItem={({ item }: { item: PostResponse }) => (
                <Post
                  username={item.username}
                  content={item.content}
                  likes={item.likes}
                  userId={item.user_id}
                  id = {item.id}
                  currUserId = {userId}
                  token = {token}
                />
              )}
            />
          )
        }
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});