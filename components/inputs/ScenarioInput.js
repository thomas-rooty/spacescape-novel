import React, { useState } from 'react'
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native'
import { addScenario } from '../../utils/adminUtils'
import { useScenariosStore } from '../../stores/scenarios.store'

const ScenarioForm = ({ token }) => {
  const [niveau, setNiveau] = useState('')
  const [titre, setTitre] = useState('')
  const [desc, setDesc] = useState('')
  const [nextScenarioPossible, setNextScenarioPossible] = useState('')
  const scenarios = useScenariosStore((state) => state.scenarios)

  const handleAddScenario = async () => {
    const scenario = {
      niveau: parseInt(niveau),
      titre,
      desc,
      nextScenarioPossible,
    }

    try {
      const response = await addScenario(scenario, token)

      // Handle the response as per your requirements
      console.log(response)

      // Display a success message
      Alert.alert('Scenario Added', 'Scenario added successfully.')

      // Reset the form fields
      setNiveau('')
      setTitre('')
      setDesc('')
      setNextScenarioPossible('')
    } catch (error) {
      console.error(error)

      // Display an error message
      Alert.alert('Error', 'Failed to add scenario. Please try again.')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Niveau'
        value={niveau}
        onChangeText={setNiveau}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        placeholder='Titre'
        value={titre}
        onChangeText={setTitre}
      />
      <TextInput
        style={styles.input}
        placeholder='Description'
        value={desc}
        onChangeText={setDesc}
      />
      <TextInput
        style={styles.input}
        placeholder='Next Scenario Possible'
        value={nextScenarioPossible}
        onChangeText={setNextScenarioPossible}
      />
      <Button title='Add Scenario' onPress={handleAddScenario} />
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
