import { Image, Text, StyleSheet , View } from 'react-native'

const CharacterCard = ({ character }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: character.imgURL,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})

export default CharacterCard
