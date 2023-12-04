'use client'
import { Churras } from '@/interfaces/IChurras'
import { LuUsers2 } from 'react-icons/lu'
import { BiSolidDollarCircle } from 'react-icons/bi'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'

export default function ChurrasCard(churras: Churras) {
  const { push } = useRouter()

  const guestsCount = churras.guests.length
  const totalPayment = () => {
    const paymentCheck = churras.guests.filter(
      (guest) => guest.isPayed === true,
    )

    const totalPayed = paymentCheck.reduce(
      (total, { paymentValue }) => total + Number(paymentValue),
      0,
    )

    return totalPayed
  }

  const handleClick = () => {
    push(`/churras/${churras.id}`)
  }

  return (
    <div
      className="bg-white p-5 min-w-[282px] min-h-[192px] shadow-lg font-black text-black flex flex-col justify-between hover:shadow-xl hover:cursor-pointer"
      onClick={handleClick}
    >
      <div>
        <p className="text-black font-extrabold text-[28px]">
          {format(new Date(churras.date), 'dd/MM')}
        </p>
        <p className="text-[rgba(0,0,0,.8)] font-bold text-[21px]">
          {churras.title}
        </p>
      </div>
      <div className="w-full flex justify-between text-black font-medium text-[21px]">
        <div className="flex items-center">
          <LuUsers2 className="text-[#FFD836] mr-2 w-[25px] h-[25px]" />
          {guestsCount}
        </div>
        <div className="flex items-center">
          <BiSolidDollarCircle className="text-[#FFD836] mr-2 w-[25px] h-[25px]" />
          R${totalPayment()}
        </div>
      </div>
    </div>
  )
}
