import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export const ChoiceButton = ({ onPress, choice }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onPress(choice)}>
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
  }
})
