import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };


  return (
    <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
      <Text style={styles.textBackButton}>{'< back'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 104,
    height: 44,
    backgroundColor: '#FFF',

    marginBottom: 10,

    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,

    shadowColor: 'rgba(9, 15, 20, 1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,

    justifyContent: 'center',
    alignItems: 'center',
  },
  textBackButton: {
    fontSize: 20,
    color: '#AAB4E7',
    fontFamily: 'Manjari',
  },
});