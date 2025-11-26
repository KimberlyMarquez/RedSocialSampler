import { createNativeStackNavigator } from '@react-navigation/native-stack';

// SCREENS
import ProfileScreen from '../screens/profileScreen';
import SharePost from '../screens/SharePost';
import AllPosts from '../screens/allPosts';
import Feed from '../screens/feed';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: false 
      }}
    >
      <Stack.Screen name="AllPosts" component={AllPosts} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="SharePost" component={SharePost} />

    </Stack.Navigator>
  );
}