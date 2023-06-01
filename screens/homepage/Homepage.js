import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, ImageBackground } from 'react-native'
import CharactersList from '../../components/lists/CharactersList'
import { useCharacterStore } from '../../stores/characters.store'
import { characterFakeData } from '../../mock/mock'

const Home = () => {
  const characters = useCharacterStore((state) => state.characters)
  const setCharacters = useCharacterStore((state) => state.updateCharacters)
  const background = require('../../assets/spacescape_banner.png')

  useEffect(() => {
    setCharacters(characterFakeData)
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <CharactersList characters={characters} />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
