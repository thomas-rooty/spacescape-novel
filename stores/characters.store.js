import { create } from 'zustand'

export const useCharactersStore = create((set) => ({
  selectedCharacter: {},
  setSelectedCharacter: (selectedCharacter) => set(() => ({ selectedCharacter })),
  updateAttribute: (attribute, value) => set((state) => ({ selectedCharacter: { ...state.selectedCharacter, [attribute]: value } })),
  characters: [],
  updateCharacters: (characters) => set(() => ({ characters })),
}))
