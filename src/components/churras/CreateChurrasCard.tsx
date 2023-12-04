'use client'
import { useChurrasStore } from '@/store'
import { GiBarbecue } from 'react-icons/gi'

export default function CreateChurrasCard() {
  const { createNewChurras, churras } = useChurrasStore((state) => state)

  const handleCreateChurras = () => {
    console.log('called')
    createNewChurras({
      date: new Date(),
      guests: [],
      id: churras.length + 1,
      maxPayment: 30,
      minPayment: 10,
      title: 'Meu Churras /3',
    })
  }
  return (
    <div
      className="bg-[#F1F1F1] p-5 min-w-[282px] min-h-[192px] font-black text-black flex flex-col justify-center items-center hover:cursor-pointer"
      onClick={handleCreateChurras}
    >
      <div className="bg-[#FFD836] rounded-full p-6">
        <GiBarbecue className="w-[40px] h-[44px] text-[rgba(0,0,0,.4)]" />
      </div>
      <p className="text-black font-bold text-[21px]">Adicionar Churras</p>
    </div>
  )
}
