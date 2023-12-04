import { Churras, Guests } from '@/interfaces/IChurras'
import { create } from 'zustand'
import { churras as mock } from '@/mock'

interface ChurrasState {
  churras: Churras[]
  setPayed: (churrasId: string, guestEmail: string, value: boolean) => void
  createNewChurras: (churras: Churras) => void
  addNewGuest: (guest: Guests, churrasId: string) => void
}

export const useChurrasStore = create<ChurrasState>()((set) => ({
  churras: mock,
  setPayed: (churrasId, guestEmail, value) =>
    set((state) => {
      console.log('called')
      const [churrasFounded] = state.churras.filter((x) => x.id === churrasId)
      churrasFounded.guests.forEach((guest) => {
        console.log(guestEmail)
        console.log(guest.email)
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

  createNewChurras: (newChurras: Churras) =>
    set((state) => {
      return {
        churras: [...state.churras, newChurras],
      }
    }),

  addNewGuest: (guest: Guests, churrasId: string) =>
    set((state) => {
      const [churrasFounded] = state.churras.filter((x) => x.id === churrasId)
      churrasFounded.guests.push(guest)

      console.log(churrasFounded)

      const newState = state.churras.filter((x) => x.id !== churrasId)
      newState.push(churrasFounded)

      return {
        churras: [...newState],
      }
    }),
}))
