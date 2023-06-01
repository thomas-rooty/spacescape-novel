import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useCharactersStore } from '../../stores/characters.store'

export const StartButton = ({ onPress }) => {
  const selectedCharacter = useCharactersStore((state) => state.selectedCharacter)
  const startImg = require('../../assets/start.png')

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onPress()}>
        <Image source={startImg} resizeMode="contain" style={styles.button} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: '40%',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  button: {
    width: 200,
    height: 200,
  },
})
