import React, { useState } from 'react'
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native'
import { addUser } from '../../utils/adminUtils'

const ScenarioForm = ({ token }) => {
  const [name, setName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleAddScenario = async () => {
    const user = {
      name,
      firstName,
      email,
      password,
      role,
    }

    try {
      await addUser(user, token)

      // Display a success message
      Alert.alert('Created User', 'Usser added successfully.')

      // Reset the form fields
      setName('')
      setFirstName('')
      setEmail('')
      setPassword('')
      setRole('')
    } catch (error) {
      console.error(error)

      // Display an error message
      Alert.alert('Error', 'Failed to add user. Please try again.')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Nom'
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder='Prenom'
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder='Role'
        value={role}
        onChangeText={setRole}
      />
      <Button title='Add User' onPress={handleAddScenario} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'black',
    color: 'white',
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    width: 250,
  },
  picker: {
    backgroundColor: 'black',
    color: 'white',
    marginBottom: 12,
    borderRadius: 4,
    width: 250,
    height: 40,
  },
})

export default ScenarioForm
