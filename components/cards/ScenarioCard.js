import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { removeScenario } from '../../utils/adminUtils'
import { useUserStore } from '../../stores/user.store'

const ScenarioCard = ({ scenario }) => {
  const cross = require('../../assets/cross.png')
  const token = useUserStore((state) => state.token)

  const handleDelete = async () => {
    await removeScenario(scenario._id, token)
    alert('Scenario supprimé')
  }

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{scenario.titre}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crossBtn} onPress={handleDelete}>
          <Image style={styles.cross} source={cross} />
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
    width: '90%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
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
  crossBtn: {
    display: 'flex',
  },
  cross: {
    width: 29,
    height: 29,
  },
})

export default ScenarioCard
