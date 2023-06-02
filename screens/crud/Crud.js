import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useUserStore } from '../../stores/user.store'
import { useScenariosStore } from '../../stores/scenarios.store'
import { getAllScenarios } from '../../utils/fetchData'

const Crud = () => {
  const setScenarios = useScenariosStore((state) => state.setScenarios)
  const scenarios = useScenariosStore((state) => state.scenarios)
  const navigation = useNavigation()
  const user = useUserStore((state) => state.user)

  // Rendering of non-admin users is not allowed
  if (user.role !== 'admin') {
    return (
      <View style={styles.container}>
        <Text>Not authorized to see this content</Text>
      </View>
    )
  }

  // Retrieve all scenarios from the database
  useEffect(() => {
    const fetchScenarios = async () => {
      const scenariosResult = await getAllScenarios()
      setScenarios(scenariosResult)
    }
    fetchScenarios()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bonjour, {user.name}</Text>
      <Text style={styles.title}>CRUD</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('AddScenario')}>
            <Text style={styles.btnText}>Ajouter un scenario</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('ManageScenarios')}>
            <Text style={styles.btnText}>Manager les scenarios</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top: 150,
    fontStyle: 'italic',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 4,
    width: 250,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
  },
})

export default Crud
