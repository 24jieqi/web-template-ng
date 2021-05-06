import create, { State } from 'zustand'

type IBaseInfo = {
  name: string
  setName: (newName: string) => void
}

export const useBaseInfo = create<IBaseInfo>((set) => ({
  name: 'limoer',
  setName: (newName: string) => set({ name: newName }),
  age: 1,
}))
