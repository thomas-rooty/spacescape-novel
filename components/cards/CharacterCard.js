import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useCharactersStore } from '../../stores/characters.store'

const CharacterCard = ({ character }) => {
  const setSelectedCharacter = useCharactersStore((state) => state.setSelectedCharacter)
  const selectedCharacter = useCharactersStore((state) => state.selectedCharacter)

  // Selection logic
  const isSelected = selectedCharacter.nom === character.nom

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSelectedCharacter(character)}>
        <Image
          style={[
            styles.image,
            isSelected && styles.selectedImage,
          ]}
          source={{
            uri: character.imgURL,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 125,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  selectedImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
})

export default CharacterCard
