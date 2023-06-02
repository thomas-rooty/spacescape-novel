import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, View, StyleSheet, Text, ImageBackground } from 'react-native'
import { useScenariosStore } from '../../stores/scenarios.store'
import { useCharactersStore } from '../../stores/characters.store'
import { getAllScenarios } from '../../utils/fetchData'
import { updateCharWithBonus, updateCharWithMalus } from '../../utils/statsUpdates'
import { characterAlive } from '../../utils/characterAlive'
import CharStats from '../../components/charstats/CharStats'
import ChoicesList from '../../components/lists/ChoicesList'

const Playing = () => {
  // Import scenario and character store
  const background = require('../../assets/scenarios/OuSePoser.png')
  const navigation = useNavigation()
  const [hasUserPlayed, setHasUserPlayed] = useState(false)
  const selectedScenario = useScenariosStore((state) => state.selectedScenario)
  const setSelectedScenario = useScenariosStore((state) => state.setSelectedScenario)
  const scenarios = useScenariosStore((state) => state.scenarios)
  const setScenarios = useScenariosStore((state) => state.setScenarios)
  const selectedCharacter = useCharactersStore((state) => state.selectedCharacter)
  const updateAttribute = useCharactersStore((state) => state.updateAttribute)

  // Game system logic
  useEffect(() => {
    const fetchScenarios = async () => {
      const results = await getAllScenarios()
      setScenarios(results)
    }
    fetchScenarios()
  }, [])

  // Randomly select a scenario to start off with
  useEffect(() => {
    const niveauOneScenarios = scenarios.filter((scenario) => scenario.niveau === 1)
    if (niveauOneScenarios.length > 0) {
      const randomScenario = niveauOneScenarios[Math.floor(Math.random() * niveauOneScenarios.length)]
      setSelectedScenario(randomScenario)
    }
  }, [scenarios])

  // What to do after a choice is made
  const onChoiceMade = async (choice) => {
    // Show user what's been done
    Alert.alert(choice.bonus.titre, choice.bonus.desc)

    // Update user played status
    setHasUserPlayed(true)

    // Update character stats
    await updateCharWithBonus(choice, selectedCharacter, updateAttribute)
    await updateCharWithMalus(choice, selectedCharacter, updateAttribute)
  }

  // Function that runs on character update
  useEffect(() => {
    if (!characterAlive(selectedCharacter)) {
      Alert.alert('Game Over', 'Vous êtes mort !')
      navigation.navigate('Homepage')
    }
    if (hasUserPlayed) {
      alert('Passage au niveau suivant !')
      setHasUserPlayed(false)
    }
  }, [selectedCharacter])

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.backgroundImg}>
        <View style={styles.characterContainer}>
          <CharStats />
        </View>
        <View style={styles.scenarioContainer}>
          <Text style={styles.title}>{selectedScenario?.titre}</Text>
          <Text style={styles.desc}>{selectedScenario?.desc}</Text>
        </View>
        <View style={styles.choicesContainer}>
          <ChoicesList choices={selectedScenario?.actionPossibles} onPress={onChoiceMade} />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    paddingTop: 60,
  },
  scenarioContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  desc: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    padding: 10,
  },
  choicesContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 40,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
})

export default Playing
