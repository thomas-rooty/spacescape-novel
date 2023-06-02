import { useState } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { loginUser } from '../../utils/authUtils'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const user = await loginUser(email, password)
    if (user) {
      alert('Bienvenue ' + user.name)
      navigation.navigate('Homepage')
    } else {
      alert('Mauvais identifiants')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} secureTextEntry={true} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#000',
    width: '80%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
})

export default Login
