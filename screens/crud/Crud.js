import { useNavigation } from '@react-navigation/native'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const Crud = () => {
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('Playing')
  }

  return (
    <View style={styles.container}>
      <Text>Crud</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Crud
