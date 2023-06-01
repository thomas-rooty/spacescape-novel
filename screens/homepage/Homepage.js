import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'
import Rocket from '../../components/rocket/Rocket'
import CharactersList from '../../components/lists/CharactersList'
import { useCharacterStore } from '../../stores/characters.store'
import { characterFakeData } from '../../mock/mock'

const Home = () => {
  const characters = useCharacterStore((state) => state.characters)
  const setCharacters = useCharacterStore((state) => state.updateCharacters)

  useEffect(() => {
    setCharacters(characterFakeData)
  }, [])

  return (
    <View style={styles.container}>
      <Rocket />
      <CharactersList characters={characters} />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcd00',
    flex: 1,
    paddingTop: 50,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
})

export default Home
