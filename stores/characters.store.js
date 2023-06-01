import { create } from 'zustand'

export const useCharactersStore = create((set) => ({
  characters: [],
  updateCharacters: (characters) => set(() => ({ characters })),
}))
