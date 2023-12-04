import { Churras, Guests } from '@/interfaces/IChurras'
import { create } from 'zustand'
import { churras, churras as mock } from '@/mock'

interface ChurrasState {
  churras: Churras[]
  setPayed: (churrasId: string, guestEmail: string, value: boolean) => void
  createNewChurras: (churras: Churras) => void
  editChurrasGuests: (guests: Guests[], churrasId: string) => void
}

export const useChurrasStore = create<ChurrasState>()((set) => ({
  churras: mock,
  setPayed: (churrasId, guestEmail, value) =>
    set((state) => {
      const [churrasFounded] = state.churras.filter((x) => x.id === churrasId)
      churrasFounded.guests.forEach((guest) => {
        if (guest.email === guestEmail) {
          guest.isPayed = value
        }
      })

      const newState = state.churras.filter((x) => x.id !== churrasId)
      newState.push(churrasFounded)

      return {
        churras: [...newState],
      }
    }),

  createNewChurras: (churras: Churras) =>
    set((state) => {
      state.churras.push(churras)
      return state
    }),

  editChurrasGuests: (guests: Guests[], churrasId: string) =>
    set((state) => {
      const [churrasFounded] = state.churras.filter((x) => x.id === churrasId)
      churrasFounded.guests = [...guests]

      const newState = state.churras.filter((x) => x.id !== churrasId)
      newState.push(churrasFounded)

      return {
        churras: [...newState],
      }
    }),
}))
