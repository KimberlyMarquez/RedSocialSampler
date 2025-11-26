import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PostButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => {
          navigation.navigate('SharePost');
        }}
          activeOpacity={0.8}>
          <Text style={styles.plusSign}>+</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
    zIndex: 1001,
  },
  floatingButton: {
    width: 70,
    height: 70,
    backgroundColor: '#81A9EE',
    borderColor: '#FFF2D0',
    borderWidth: 9,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
