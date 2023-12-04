import { Guests } from '@/interfaces/IChurras'
import { format } from 'date-fns'
import { BiSolidDollarCircle } from 'react-icons/bi'
import { LuUsers2 } from 'react-icons/lu'

interface IChurrasDetailsHeader {
  date: Date
  title: string
  guests: Guests[]
}

export default function ChurrasDetailsHeader({
  date,
  title,
  guests,
}: IChurrasDetailsHeader) {
  const totalPayed = () => {
    const paymentCheck: Guests[] = guests.filter(
      (guest) => guest.isPayed === true,
    )

    const totalPayed = paymentCheck.reduce(
      (total, { paymentValue }) => total + Number(paymentValue),
      0,
    )

    return totalPayed
  }

  const totalToReceive = () => {
    const inviteds: Guests[] = guests
    const total: number = inviteds.reduce(
      (amount, { paymentValue }) => amount + Number(paymentValue),
      0,
    )

    return total
  }

  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col">
        <div>
          <p className="text-black text-[28px] font-extrabold">
            {format(new Date(date), 'dd/MM')}
          </p>
        </div>
        <div>
          <p className="text-rgba(0,0,0,.8) text-[36px] font-bold">{title}</p>
        </div>
      </div>

      <div className="flex flex-col justify-evenly">
        <div className="flex items-center">
          <LuUsers2 className="text-[#FFD836] mr-2 w-[25px] h-[25px]" />{' '}
          {guests.length}
        </div>
        <div className="flex items-center">
          <BiSolidDollarCircle className="text-[#FFD836] mr-2 w-[25px] h-[25px]" />{' '}
          R${totalPayed()}/{totalToReceive()}
        </div>
      </div>
    </div>
  )
}
