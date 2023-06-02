export const randomeFirstScenario = (scenarios) => {
  const niveauOneScenarios = scenarios.filter((scenario) => scenario.niveau === 1)
  if (niveauOneScenarios.length > 0) {
    return niveauOneScenarios[Math.floor(Math.random() * niveauOneScenarios.length)]
  }
}

export const randomNextScenario = (scenarios, unplanneds, currentScenario) => {
  // Generate a random number between 0 and 3, so that an unplanned scenario is selected 25% of the time
  const random = Math.floor(Math.random() * 2)

  // Check if it's the last scenario
  if (currentScenario.nextScenarioPossible === 'FIN') {
    return false
  }

  if (random === 0 && currentScenario.unplannedPossible) {
    // If it's an unplanned scenario, select a random one knowing all scenarios have an unplannedPossible key, I want it to be selected if the random method returns 0
    return unplanneds.find((unplanned) => unplanned._id === currentScenario.unplannedPossible)
  }

  // Each scenario has a nextScenarioPossible id, which is the _id of the next scenario
  return scenarios.find((scenario) => scenario._id === currentScenario.nextScenarioPossible)
}
