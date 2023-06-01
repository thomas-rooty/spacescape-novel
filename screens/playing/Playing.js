import { useEffect } from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import { useScenariosStore } from '../../stores/scenarios.store'
import { getAllScenarios } from '../../utils/fetchData'
import CharStats from '../../components/charstats/CharStats'

const Playing = () => {
  const selectedScenario = useScenariosStore((state) => state.selectedScenario)
  const setSelectedScenario = useScenariosStore((state) => state.setSelectedScenario)
  const scenarios = useScenariosStore((state) => state.scenarios)
  const setScenarios = useScenariosStore((state) => state.setScenarios)

  const background = require('../../assets/scenarios/OuSePoser.png')

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
      <ImageBackground source={background} resizeMode="cover" style={styles.backgroundImg}>
        <View style={styles.characterContainer}>
          <CharStats />
        </View>
        <View style={styles.scenarioContainer}>
          <Text style={styles.title}>{selectedScenario?.titre}</Text>
          <Text style={styles.desc}>{selectedScenario?.desc}</Text>
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
})

export default Playing
