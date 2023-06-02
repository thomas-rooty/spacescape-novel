import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Crud = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD</Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('AddScenario')}>
          <Text style={styles.btnText}>Add a Scenario</Text>
        </TouchableOpacity>
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
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 4,
  },
  btnText: {
    fontSize: 20,
  },
})

export default Crud
