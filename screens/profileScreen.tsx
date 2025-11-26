import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import Follows from '../components/follows';



type ProfileInfo = {
  username: string,
  userId:number,
  id: number,
  currUserId:number,
  token:string
}

export default function Profile() {
  return (
    <ImageBackground
      source={require('../assets/profileBackground.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.profileInfo}>
          <Image
            source={require('../assets/profilePic.jpeg')}
            style={styles.profileImg}
          />
          <Text style={styles.profileName}>Francis</Text>
          <Follows />


          
        </View>
        <View style={styles.profilePost}>
          <Text style={styles.postTitle}>Posts</Text>
          
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 176,
  },
  profileInfo:{
    alignItems: 'center',
  },
  profilePost:{
    marginTop: 10,
    marginLeft: 29,
  },
  profileName: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 10,
  },
  profileImg: {
    width: 107,
    height: 107,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#FFF2D0',
  },
  postTitle: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
});
