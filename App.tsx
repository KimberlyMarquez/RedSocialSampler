import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './components/navbar';
import Routes from './navigation/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Routes />
        <Navbar />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});