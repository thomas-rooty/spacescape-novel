import { create } from 'zustand'
import { characterFakeData } from '../mock/mock'

export const useCharacterStore = create((set) => ({
  characters: [],
  character: characterFakeData,
  updateCharacters: (characters) => set(() => ({ characters })),
  addCharacter: (character) => set((state) => ({ characters: [...state.characters, character] })),
  removeCharacter: (character) =>
    set((state) => ({
      characters: state.characters.filter((c) => c.id !== character.id),
    })),
  updateCharacter: (character) =>
    set((state) => ({
      characters: state.characters.map((c) => (c.id === character.id ? character : c)),
    })),
  resetCharacters: () => set(() => ({ characters: [] })),
  resetCharacter: () => set(() => ({ character: characterFakeData })),
  resetStore: () => {
    set(() => ({ characters: [] }))
    set(() => ({ character: characterFakeData }))
  },
}))
