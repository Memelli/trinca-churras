'use client'
import { Guests } from '@/interfaces/IChurras'
import { useChurrasStore } from '@/store'
import {
  ManageGuestsFormData,
  manageGuestsSchema,
} from '@/utils/manage-guests-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'

interface IInviteGuestsProps {
  churrasId: string
}

export default function InviteGuests({ churrasId }: IInviteGuestsProps) {
  const { addNewGuest } = useChurrasStore((state) => state)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ManageGuestsFormData>({
    resolver: zodResolver(manageGuestsSchema),
  })

  const handleSubmitGuest = (data: ManageGuestsFormData) => {
    const newGuest: Guests = {
      email: data.email,
      name: data.name,
      isOwner: false,
      isPayed: false,
      paymentValue: Number(data.paymentValue),
    }

    addNewGuest(newGuest, churrasId)
  }

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit(handleSubmitGuest)}
        className="flex justify-between w-full gap-x-4 mt-2"
      >
        <div className="w-2/4">
          <input
            placeholder="Qual o nome da fera?"
            className={clsx(
              'border p-2 rounded-md',
              errors.name ? 'focus:outline-red-400' : '',
            )}
            {...register('name')}
          />
          {errors.name && (
            <span className="font-bold text-[12px] text-red-600">
              {errors.name.message as string}
            </span>
          )}
        </div>

        <div className="w-2/4">
          <input
            placeholder="E o e-mail?"
            className="border p-2 rounded-md w-full"
            {...register('email')}
          />
          {errors.email && (
            <span className="font-bold text-[12px] text-red-600">
              {errors.email.message as string}
            </span>
          )}
        </div>

        <div className="w-2/4">
          <input
            type="number"
            placeholder="Vai pagar quanto?"
            className="border p-2 rounded-md w-full"
            {...register('paymentValue')}
          />
          {errors.paymentValue && (
            <span className="font-bold text-[12px] text-red-600">
              {errors.paymentValue.message as string}
            </span>
          )}
        </div>

        <button className="bg-[#FFD836] rounded-md px-5 py-1 h-fit font-bold text-[21px]">
          +
        </button>
      </form>
    </div>
  )
}
