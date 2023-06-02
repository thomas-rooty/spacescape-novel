export const randomFirstScenario = (scenarios) => {
  const niveauOneScenarios = scenarios.filter((scenario) => scenario.niveau === 1)
  if (niveauOneScenarios.length > 0) {
    return niveauOneScenarios[Math.floor(Math.random() * niveauOneScenarios.length)]
  }
}

export const randomNextScenario = (scenarios, currentScenario) => {
  // Each scenario has a nextScenarioPossible id, which is the _id of the next scenario
  return scenarios.find((scenario) => scenario._id === currentScenario.nextScenarioPossible)
}
