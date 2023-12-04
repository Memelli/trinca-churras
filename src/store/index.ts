import { Churras } from '@/interfaces/IChurras'
import { create } from 'zustand'
import { churras as mock } from '@/mock'

interface ChurrasState {
  churras: Churras[]
  setPayed: (churrasId: string, guestName: string, value: boolean) => void
}

export const useChurrasStore = create<ChurrasState>()((set) => ({
  churras: mock,
  setPayed: (churrasId, guestName, value) =>
    set((state) => {
      const [churrasFounded] = state.churras.filter((x) => x.id === churrasId)
      churrasFounded.guests.forEach((guest) => {
        if (guest.name === guestName) {
          guest.isPayed = value
        }
      })

      const newState = state.churras.filter((x) => x.id !== churrasId)
      newState.push(churrasFounded)

      return {
        churras: [...newState],
      }
    }),
}))
