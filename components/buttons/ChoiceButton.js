import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { minAttributeMeet } from '../../utils/minAttributeMeet'
import { useCharactersStore } from '../../stores/characters.store'

export const ChoiceButton = ({ onPress, choice }) => {
  const selectedCharacter = useCharactersStore((state) => state.selectedCharacter)

  // Check if the character meets the minimum attribute requirements
  const isDisabled = !minAttributeMeet(choice.condition, selectedCharacter)

  return (
    <View style={[styles.buttonContainer, { opacity: isDisabled ? 0 : 1 }]}>
      <TouchableOpacity onPress={() => onPress(choice)} disabled={isDisabled}>
        <Text style={styles.text}>{choice.titre}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderStyle: 'solid',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '48%',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
})
