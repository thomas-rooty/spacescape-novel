import { create } from 'zustand'

export const useUserStore = create((set) => ({
  token: '',
  user: {},
  setToken: (token) => set(() => ({ token })),
  setUser: (user) => set(() => ({ user })),
}))
