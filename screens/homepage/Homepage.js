import { useNavigation } from '@react-navigation/native'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { StartButton } from '../../components/buttons/StartButton'
import { LoginPageButton, AdminPanelButton } from '../../components/buttons/Buttons'
import { useCharactersStore } from '../../stores/characters.store'
import { useUserStore } from '../../stores/user.store'
import SelectChar from '../../components/selectchar/SelectChar'

const background = require('../../assets/spacescape_banner.png')

const App = () => {
  const selectedCharacter = useCharactersStore((state) => state.selectedCharacter)
  const user = useUserStore((state) => state.user)
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('Playing')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode='cover' style={styles.image}>
        <View style={styles.buttonContainer}>
          {user._id === undefined && <LoginPageButton />}
          {user.role === 'admin' && <AdminPanelButton />}
        </View>
        {selectedCharacter.nom && <StartButton onPress={onPress} />}
        <SelectChar />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 45,
  },
  image: {
    flex: 1,
  },
})

export default App
