import { create } from 'zustand'

export const useUnplannedStore = create((set) => ({
  unplanneds: [],
  setUnplanneds: (unplanneds) => set(() => ({ unplanneds })),
}))
