'use client'
import { Guests } from '@/interfaces/IChurras'
import ChurrasSelectedButton from './ChurrasSelectedButton'
import clsx from 'clsx'
import { useChurrasStore } from '@/store'

interface IChurrasDetailsBody {
  guest: Guests
  id: string | number
  enableEdit: boolean
}

export default function ChurrasDetailsBody({
  guest,
  id,
  enableEdit,
}: IChurrasDetailsBody) {
  const setPayed = useChurrasStore((state) => state.setPayed)
  return (
    <div className="w-full flex flex-col">
      <div
        onClick={() => setPayed(String(id), guest.email, !guest.isPayed)}
        className="flex items-center cursor-pointer border-b-[#E5C231] border-b py-1"
      >
        {!enableEdit && <ChurrasSelectedButton isSelected={guest.isPayed} />}
        <div className="w-full flex items-center justify-between ml-4 ">
          <p className="text-[rgba(0,0,0,.8)] text-[21px] font-bold">
            {guest.name}
          </p>

          {!enableEdit && (
            <p
              className={clsx(
                'text-[rgba(0,0,0,.8)] text-[21px] font-bold',
                guest.isPayed ? 'line-through' : '',
              )}
            >
              R$ {guest.paymentValue}
            </p>
          )}
          {enableEdit && <button>X</button>}
        </div>
      </div>
    </div>
  )
}
