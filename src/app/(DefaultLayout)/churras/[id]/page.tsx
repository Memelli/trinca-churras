'use client'
import ChurrasDetailsBody from '@/components/churras-details/ChurrasDetailsBody'
import ChurrasDetailsHeader from '@/components/churras-details/ChurrasDetailsHeader'
import { useChurrasStore } from '@/store'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function Churras(props: { params: { id: string } }) {
  const state = useChurrasStore((state) => state.churras)
  const [foundedChurras] = state.filter(
    (churras) => churras.id === props.params.id,
  )

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
      {!foundedChurras.guests.length && (
        <div className="flex text-center">
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
