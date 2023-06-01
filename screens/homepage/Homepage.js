import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { StartButton } from '../../components/buttons/Buttons'
import { useCharactersStore } from '../../stores/characters.store'
import SelectChar from '../../components/selectchar/SelectChar'

const background = require('../../assets/spacescape_banner.png')

const App = () => {
  const selectedCharacter = useCharactersStore((state) => state.selectedCharacter)
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('Playing')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
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
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default App
