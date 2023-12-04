import { GiBarbecue } from 'react-icons/gi'

export default function CreateChurrasCard() {
  return (
    <div className="bg-[#F1F1F1] p-5 min-w-[282px] min-h-[192px] font-black text-black flex flex-col justify-center items-center hover:cursor-pointer">
      <div className="bg-[#FFD836] rounded-full p-6">
        <GiBarbecue className="w-[40px] h-[44px] text-[rgba(0,0,0,.4)]" />
      </div>
      <p className="text-black font-bold text-[21px]">Adicionar Churras</p>
    </div>
  )
}
