import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

export const LoginPageButton = () => {
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export const AdminPanelButton = () => {
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('Crud')
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 15,
    width: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
})
