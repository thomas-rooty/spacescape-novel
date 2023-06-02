export const randomStarterScenario = (scenarios) => {
  const niveauOneScenarios = scenarios.filter((scenario) => scenario.niveau === 1)
  if (niveauOneScenarios.length > 0) {
    return niveauOneScenarios[Math.floor(Math.random() * niveauOneScenarios.length)]
  }
}
