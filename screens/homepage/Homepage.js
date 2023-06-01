import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { getAllCharacters } from '../../utils/fetchData'
import { useCharactersStore } from '../../stores/characters.store'
import CharactersList from '../../components/lists/CharactersList'

const Home = () => {
  const characters = useCharactersStore((state) => state.characters)
  const setCharacters = useCharactersStore((state) => state.updateCharacters)
  const background = require('../../assets/spacescape_banner.png')

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await getAllCharacters()
      setCharacters(result)
    }
    fetchCharacters()
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
