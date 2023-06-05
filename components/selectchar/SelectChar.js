import { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { useCharactersStore } from '../../stores/characters.store'
import { getAllCharacters } from '../../utils/fetchData'
import CharactersList from '../lists/CharactersList'

const SelectChar = () => {
  const characters = useCharactersStore((state) => state.characters)
  const setCharacters = useCharactersStore((state) => state.updateCharacters)
  const earthlingSelection = require('../../assets/earthling_selection.png')

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await getAllCharacters()
      setCharacters(result)
    }
    fetchCharacters()
  }, [])

  return (
    <View style={styles.container}>
      <Image source={earthlingSelection} resizeMode="contain" style={styles.selectionText} />
      <CharactersList characters={characters} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '33%',
    bottom: 0,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  selectionText: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
})

export default SelectChar
