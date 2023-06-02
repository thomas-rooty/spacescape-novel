import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

const LoginPageButton = () => {
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Admin</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 15,
    width: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
})

export default LoginPageButton
