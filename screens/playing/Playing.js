import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, View, StyleSheet, Text, ImageBackground } from 'react-native'
import { useScenariosStore } from '../../stores/scenarios.store'
import { useUnplannedStore } from '../../stores/unplanned.store'
import { useCharactersStore } from '../../stores/characters.store'
import { getAllScenarios, getAllUnplanned } from '../../utils/fetchData'
import { updateCharWithBonus, updateCharWithMalus } from '../../utils/statsUpdates'
import { characterAlive } from '../../utils/characterAlive'
import { randomNextScenario, randomeFirstScenario } from '../../utils/scenarioRandomizer'
import { setImageBackground } from '../../utils/setImageBackground'
import * as Haptics from 'expo-haptics'
import CharStats from '../../components/charstats/CharStats'
import ChoicesList from '../../components/lists/ChoicesList'

const Playing = () => {
  // Import scenario and character store
  const navigation = useNavigation()
  const [hasUserPlayed, setHasUserPlayed] = useState(false)
  const [background, setBackground] = useState('https://github.com/thomas-rooty/spacescape-novel/blob/master/assets/scenarios/01/1.jpeg?raw=true')
  const selectedScenario = useScenariosStore((state) => state.selectedScenario)
  const setSelectedScenario = useScenariosStore((state) => state.setSelectedScenario)
  const scenarios = useScenariosStore((state) => state.scenarios)
  const setScenarios = useScenariosStore((state) => state.setScenarios)
  const unplanneds = useUnplannedStore((state) => state.unplanneds)
  const setUnplanneds = useUnplannedStore((state) => state.setUnplanneds)
  const selectedCharacter = useCharactersStore((state) => state.selectedCharacter)
  const updateAttribute = useCharactersStore((state) => state.updateAttribute)

  // Game system logic
  useEffect(() => {
    const fetchScenarios = async () => {
      const scenariosResult = await getAllScenarios()
      setScenarios(scenariosResult)
      const unplannedResult = await getAllUnplanned()
      setUnplanneds(unplannedResult)
    }
    fetchScenarios()
  }, [])

  // Randomly select a scenario to start off with
  useEffect(() => {
    if (scenarios.length > 0) {
      setSelectedScenario(randomeFirstScenario(scenarios))
    }
  }, [scenarios])

  // What to do after a choice is made
  const onChoiceMade = async (choice) => {
    // Vibrate
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)

    // Show user what's been done
    Alert.alert(choice.bonus.titre, choice.bonus.desc)

    // Update user played status
    setHasUserPlayed(true)

    // Update character stats
    await updateCharWithBonus(choice, selectedCharacter, updateAttribute)
    await updateCharWithMalus(choice, selectedCharacter, updateAttribute)
  }

  // Set image every time selectedScenario changes
  useEffect(() => {
    if (selectedScenario) {
      const image = setImageBackground({ scenario: selectedScenario })
      setBackground(image)
    }
  }, [selectedScenario])

  // Function to handle round logic
  const handleRound = () => {
    if (!characterAlive(selectedCharacter)) {
      Alert.alert('Game Over', 'Vous êtes mort !')
      navigation.navigate('Homepage')
    }

    if (hasUserPlayed) {
      setHasUserPlayed(false)
      const nextScenario = randomNextScenario(scenarios, unplanneds, selectedScenario)
      if (nextScenario !== false) {
        setSelectedScenario(nextScenario)
      } else {
        Alert.alert('Fin du jeu', 'Vous avez terminé le jeu !')
        navigation.navigate('Homepage')
      }
    }
  }

  useEffect(() => {
    handleRound()
  }, [selectedCharacter])

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: background }} resizeMode="cover" style={styles.backgroundImg}>
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
