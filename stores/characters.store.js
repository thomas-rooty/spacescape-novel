import { create } from 'zustand'

export const useCharactersStore = create((set) => ({
  selectedCharacter: {},
  setSelectedCharacter: (selectedCharacter) => set(() => ({ selectedCharacter })),
  characters: [],
  updateCharacters: (characters) => set(() => ({ characters })),
}))
