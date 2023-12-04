'use client'
import ChurrasDetailsBody from '@/components/churras-details/ChurrasDetailsBody'
import ChurrasDetailsHeader from '@/components/churras-details/ChurrasDetailsHeader'
import { useChurrasStore } from '@/store'

export default function Churras(props: { params: { id: string } }) {
  const state = useChurrasStore((state) => state.churras)
  const [foundedChurras] = state.filter(
    (churras) => churras.id === props.params.id,
  )
  return (
    <div className="-mt-10 flex flex-col justify-center md:justify-normal bg-white w-full shadow-xl p-4 pb-10">
      <ChurrasDetailsHeader
        date={foundedChurras.date}
        guests={foundedChurras.guests}
        title={foundedChurras.title}
      />
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
