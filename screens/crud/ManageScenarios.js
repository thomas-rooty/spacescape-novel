import { StyleSheet, Text, View } from 'react-native'
import { useUserStore } from '../../stores/user.store'
import { useScenariosStore } from '../../stores/scenarios.store'
import ScenariosList from '../../components/lists/ScenariosList'

const ManageScenarios = () => {
  const user = useUserStore((state) => state.user)
  const token = useUserStore((state) => state.token)

  // Rendering of non-admin users is not allowed
  if (user.role !== 'admin') {
    return (
      <View style={styles.container}>
        <Text>Not authorized to see this content</Text>
      </View>
    )
  }

  // Rendering of admin users is allowed
  return (
    <View style={styles.container}>
      <Text>CRUD</Text>
      <ScenariosList />
      <Text>CRUD</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ManageScenarios
