import { Text, FlatList, StyleSheet, View } from 'react-native'
import ScenarioCard from '../cards/ScenarioCard'
import { useScenariosStore } from '../../stores/scenarios.store'

const ScenariosList = () => {
  const scenarios = useScenariosStore((state) => state.scenarios)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Liste des scenarios</Text>
      </View>
      <FlatList
        data={scenarios}
        renderItem={({ item }) => <ScenarioCard scenario={item} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height: '100%',
    width: '100%',
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#000',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})

export default ScenariosList
