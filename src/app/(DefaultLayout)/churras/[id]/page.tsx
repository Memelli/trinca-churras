'use client'
import ChurrasDetailsBody from '@/components/churras-details/ChurrasDetailsBody'
import ChurrasDetailsHeader from '@/components/churras-details/ChurrasDetailsHeader'
import InviteGuests from '@/components/guests/InviteGuests'
import { useChurrasStore } from '@/store'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState } from 'react'

export default function Churras(props: { params: { id: string } }) {
  const state = useChurrasStore((state) => state.churras)
  const [foundedChurras] = state.filter(
    (churras) => churras.id === props.params.id,
  )

  const [enableEdit, setEnableEdit] = useState(false)
  const [enableInvite, setEnableInvite] = useState(false)

  if (!foundedChurras) {
    return notFound()
  }

  return (
    <div className="-mt-10 flex flex-col justify-center md:justify-normal bg-white w-full shadow-xl p-4 pb-10">
      <ChurrasDetailsHeader
        date={foundedChurras.date}
        guests={foundedChurras.guests}
        title={foundedChurras.title}
      />

      <div className="flex flex-col">
        <div className="flex flex-row-reverse gap-x-4">
          <button
            onClick={() => setEnableInvite(!enableInvite)}
            className="bg-[#FFD836] px-5 py-2 rounded-lg font-bold shadow-md hover:shadow-lg"
          >
            Convidar
          </button>
          <button
            onClick={() => setEnableEdit(!enableEdit)}
            className="bg-black px-5 py-2 rounded-lg font-bold text-[#FFD836] shadow-md hover:shadow-lg"
          >
            Gerenciar Convidados
          </button>
        </div>

        <div className="flex flex-col">
          {enableInvite && <InviteGuests churrasId={foundedChurras.id} />}
        </div>
      </div>

      {!foundedChurras.guests.length && (
        <div className="flex text-center mt-8">
          <p className="text-black text-[16px] font-semibold">
            Oops, parece que você não convidou ninguém ainda...{' '}
            <Link
              className="text-[#ffd836] font-extrabold hover:underline"
              href={`/guests/${foundedChurras.id}`}
            >
              clicando aqui
            </Link>
            , você pode resolver isso!
          </p>
        </div>
      )}
      <div className="mt-10 w-full flex flex-col">
        {foundedChurras.guests.map((guest, index) => (
          <ChurrasDetailsBody
            guest={guest}
            id={foundedChurras.id}
            key={guest.name + index}
          />
        ))}
      </div>
    </div>
  )
}
