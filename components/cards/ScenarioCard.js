import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const ScenarioCard = ({ scenario }) => {
  const handlePress = () => {
    console.log('pressed')
  }
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.text}>{scenario.titre}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 4,
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
})

export default ScenarioCard
