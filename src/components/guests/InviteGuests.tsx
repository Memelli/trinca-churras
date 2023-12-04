'use client'
import { Guests } from '@/interfaces/IChurras'
import { useChurrasStore } from '@/store'
import { ChangeEvent, useState } from 'react'

interface IInviteGuestsProps {
  guests: Guests[]
  churrasId: string
}

export default function InviteGuests({
  guests,
  churrasId,
}: IInviteGuestsProps) {
  const { editChurrasGuests } = useChurrasStore((state) => state)
  const [guestsList, setGuestsList] = useState<Guests[]>(guests)
  const [guest, setGuest] = useState({
    name: '',
    email: '',
  })

  const handleSubmitGuest = () => {
    if (!guest.email || !guest.name) return
    const newGuest: Guests = {
      email: guest.email,
      name: guest.name,
      isOwner: false,
      isPayed: false,
      paymentValue: 0,
    }

    setGuestsList((state) => [...state, newGuest])
    editChurrasGuests(guestsList, churrasId)
    setGuest({
      name: '',
      email: '',
    })
  }

  const handleRemoveGuest = (guestEmail: string) => {
    const newGuests = guestsList.filter((guest) => guest.email !== guestEmail)

    setGuestsList(newGuests)
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuest((state) => ({
      name: e.target.value,
      email: state.email,
    }))
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuest((state) => ({
      name: state.name,
      email: e.target.value,
    }))
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between w-full gap-x-4 mt-2">
        <div className="w-2/4">
          <input
            value={guest.name}
            placeholder="Qual o nome da fera?"
            onChange={handleNameChange}
            className="border p-2 rounded-md w-full"
          />
        </div>

        <div className="w-2/4">
          <input
            value={guest.email}
            placeholder="E o e-mail?"
            onChange={handleEmailChange}
            className="border p-2 rounded-md w-full"
          />
        </div>

        <button
          onClick={handleSubmitGuest}
          className="bg-[#FFD836] rounded-md w-[40px] h-[40px] font-bold text-[21px]"
        >
          +
        </button>
      </div>

      <div className="flex flex-col mt-4">
        {guestsList && (
          <div>
            {guestsList.map((guest) => (
              <div
                key={guest.name}
                className="flex w-full justify-between items-center"
              >
                <p className="text-[rgba(0,0,0,.8)] font-bold">{guest.name}</p>
                <p className="text-[rgba(0,0,0,.8)]">{guest.email}</p>
                <button
                  onClick={() => handleRemoveGuest(guest.email)}
                  className="font-extrabold rounded-sm"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
