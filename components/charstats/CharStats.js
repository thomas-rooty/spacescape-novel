import { View, StyleSheet, Image, Text } from 'react-native'
import { useCharactersStore } from '../../stores/characters.store'

const CharStats = () => {
  const selectedCharacter = useCharactersStore((state) => state.selectedCharacter)

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: selectedCharacter.imgURL }} />
        <Text style={styles.name}>{selectedCharacter.nom}</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.columnLeft}>
          <Text style={styles.stat}>PV : {selectedCharacter.vieDefault}</Text>
          <Text style={styles.stat}>Espece : {selectedCharacter.espece}</Text>
          <Text style={styles.stat}>Energie : {selectedCharacter.energie}</Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={styles.stat}>Force : {selectedCharacter.force}</Text>
          <Text style={styles.stat}>Charisme : {selectedCharacter.charisme}</Text>
          <Text style={styles.stat}>Courage : {selectedCharacter.courage}</Text>
          <Text style={styles.stat}>Dexterite : {selectedCharacter.dexterite}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#151515',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#fff',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 10,
    marginBottom: 3,
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  stat: {
    color: '#fff',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  columnLeft: {
    marginRight: 15,
  },
})

export default CharStats
