import { create } from 'zustand'

export const useCharactersStore = create((set) => ({
  selectedCharacter: {},
  setSelectedCharacter: (selectedCharacter) => set(() => ({ selectedCharacter })),
  updateSelectedCharacter: (selectedCharacter) => set((state) => ({ selectedCharacter: { ...state.selectedCharacter, ...selectedCharacter } })),
  characters: [],
  updateCharacters: (characters) => set(() => ({ characters })),
}))
