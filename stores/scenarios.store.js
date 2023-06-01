import { create } from 'zustand'

export const useScenariosStore = create((set) => ({
  scenarios: [],
  selectedScenario: null,
  setSelectedScenario: (scenario) => set(() => ({ selectedScenario: scenario })),
  setScenarios: (scenarios) => set(() => ({ scenarios })),
}))
