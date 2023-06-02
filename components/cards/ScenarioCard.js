import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const ScenarioCard = ({ scenario }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Text>{scenario.titre}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffe57b',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '49%',
    height: 100,
  },
})

export default ScenarioCard
