import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { useUserStore } from '../../stores/user.store'
import ScenarioInput from '../../components/inputs/ScenarioInput'

const Crud = () => {
  const navigation = useNavigation()
  const user = useUserStore((state) => state.user)
  const token = useUserStore((state) => state.token)

  const onPress = () => {
    navigation.navigate('Playing')
  }

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
      <Text>Crud</Text>
      <ScenarioInput token={token} />
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

export default Crud
