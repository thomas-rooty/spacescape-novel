import { FlatList, StyleSheet, View } from 'react-native'
import ScenarioCard from '../cards/ScenarioCard'
import { useScenariosStore } from '../../stores/scenarios.store'

const ScenariosList = () => {
  const scenarios = useScenariosStore((state) => state.scenarios)

  return (
    <View style={styles.container}>
      <FlatList
        data={scenarios}
        renderItem={({ item }) => <ScenarioCard scenario={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    backgroundColor: '#ffcd00',
  },
})

export default ScenariosList
