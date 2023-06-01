import { View, Image, StyleSheet } from 'react-native'
import { useCharactersStore } from '../../stores/characters.store'

const Playing = () => {
  const selectedCharacter = useCharactersStore((state) => state.selectedCharacter)

  return (
    <View style={styles.container}>
      <View style={styles.characterContainer}>
        <Image style={styles.image} source={{ uri: selectedCharacter.imgURL }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a45d5d',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
})

export default Playing
