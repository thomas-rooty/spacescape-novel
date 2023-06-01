import { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useCharactersStore } from '../../stores/characters.store'
import { useScenariosStore } from '../../stores/scenarios.store'
import { getAllScenarios } from '../../utils/fetchData'
import CharStats from '../../components/charstats/CharStats'

const Playing = () => {
  const selectedCharacter = useCharactersStore((state) => state.selectedCharacter)
  const selectedScenario = useScenariosStore((state) => state.selectedScenario)
  const setSelectedScenario = useScenariosStore((state) => state.setSelectedScenario)
  const scenarios = useScenariosStore((state) => state.scenarios)
  const setScenarios = useScenariosStore((state) => state.setScenarios)

  useEffect(() => {
    const fetchScenarios = async () => {
      const results = await getAllScenarios()
      setScenarios(results)
    }
    fetchScenarios()
  }, [])

  // Set the selected scenario to a random scenario that has niveau 1 in it
  useEffect(() => {
    //const niveauOneScenarios = scenarios.filter((scenario) => scenario.niveau === 1)
    //if (niveauOneScenarios.length > 0) {
    //  const randomScenario = niveauOneScenarios[Math.floor(Math.random() * niveauOneScenarios.length)]
    //  setSelectedScenario(randomScenario)
    //}
    setSelectedScenario(scenarios[3]) // TEMP
  }, [scenarios])

  return (
    <View style={styles.container}>
      <View style={styles.characterContainer}>
        <CharStats />
      </View>
      <Text style={styles.text}>Titre du scenario : {selectedScenario?.titre}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a45d5d',
    flex: 1,
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
})

export default Playing
