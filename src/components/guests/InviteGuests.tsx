'use client'
import { Guests } from '@/interfaces/IChurras'
import { useChurrasStore } from '@/store'
import { ChangeEvent, useState } from 'react'

interface IInviteGuestsProps {
  churrasId: string
}

export default function InviteGuests({ churrasId }: IInviteGuestsProps) {
  const { addNewGuest } = useChurrasStore((state) => state)
  const [guest, setGuest] = useState({
    name: '',
    email: '',
    paymentValue: 0,
  })

  const handleSubmitGuest = () => {
    if (!guest.email || !guest.name) return
    const newGuest: Guests = {
      email: guest.email,
      name: guest.name,
      isOwner: false,
      isPayed: false,
      paymentValue: guest.paymentValue,
    }

    addNewGuest(newGuest, churrasId)
    setGuest({
      name: '',
      email: '',
      paymentValue: 0,
    })
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuest((state) => ({
      name: e.target.value,
      email: state.email,
      paymentValue: state.paymentValue,
    }))
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuest((state) => ({
      name: state.name,
      email: e.target.value,
      paymentValue: state.paymentValue,
    }))
  }

  const handlePaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuest((state) => ({
      name: state.name,
      email: state.email,
      paymentValue: Number(e.target.value),
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

        <div className="w-2/4">
          <input
            value={guest.paymentValue}
            type="number"
            placeholder="Vai pagar quanto?"
            onChange={handlePaymentChange}
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
    </div>
  )
}
