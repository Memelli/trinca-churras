'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuidv4 } from 'uuid'

import { useChurrasStore } from '@/store'
import {
  CreateChurrasFormData,
  createChurrasSchema,
} from '@/utils/create-churras-schema'
import clsx from 'clsx'
import { Churras } from '@/interfaces/IChurras'
import { useRouter } from 'next/navigation'

export default function CreateChurras() {
  const { push } = useRouter()
  const { createNewChurras } = useChurrasStore((state) => state)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChurrasFormData>({
    resolver: zodResolver(createChurrasSchema),
  })

  const onSubmit = (data: CreateChurrasFormData) => {
    console.log(data.date)
    console.log(new Date(data.date))
    const churrasDate = data.date.split('/')
    const newChurrasDate =
      churrasDate[1] + '/' + churrasDate[0] + '/' + churrasDate[2]

    const churras: Churras = {
      id: uuidv4(),
      title: data.title,
      date: new Date(newChurrasDate),
      guests: [],
      maxPayment: Number(data.maxPayment),
      minPayment: Number(data.minPayment),
    }

    createNewChurras(churras)
    push('/')
  }

  return (
    <div className="-mt-10 flex flex-col justify-center md:justify-normal bg-white w-full shadow-xl p-4 pb-10">
      <p className="text-[21px] text-[rgba(0,0,0,.8)] font-bold">
        Marcar um churras, bora?
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-2 flex flex-col gap-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="title">Nome do churras</label>
          <input
            placeholder="Nome do Churras"
            className={clsx(
              'border p-2 rounded-md block',
              errors.title ? 'focus:outline-red-400' : '',
            )}
            {...register('title')}
          />
          {errors.title && (
            <span className="font-bold text-[12px] text-red-600">
              {errors.title.message as string}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="date">E quando vai ser?</label>
          <input
            placeholder="Data (dia/mes/ano)"
            className={clsx(
              'border p-2 rounded-md block',
              errors.date ? 'focus:outline-red-400' : '',
            )}
            {...register('date')}
          />
          {errors.date && (
            <span className="font-bold text-[12px] text-red-600">
              {errors.date.message as string}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="maxPayment">
            Quem vai tomar uma breja paga quanto?
          </label>
          <input
            placeholder="20 reais ta bom?"
            type="number"
            className={clsx(
              'border p-2 rounded-md block',
              errors.maxPayment ? 'focus:outline-red-400' : '',
            )}
            {...register('maxPayment')}
          />
          {errors.maxPayment && (
            <span className="font-bold text-[12px] text-red-600">
              {errors.maxPayment.message as string}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="minPayment">Mas quem não bebe? Paga menos?</label>
          <input
            placeholder="10zão ta ótimo..."
            type="number"
            className={clsx(
              'border p-2 rounded-md block',
              errors.minPayment ? 'focus:outline-red-400' : '',
            )}
            {...register('minPayment')}
          />
          {errors.minPayment && (
            <span className="font-bold text-[12px] text-red-600">
              {errors.minPayment.message as string}
            </span>
          )}
        </div>

        <div className="w-full h-[50px] flex justify-center">
          <button className="w-3/4 bg-[#ffd836] text-[rgba(0,0,0,.8] font-bold py-2 hover:border-[3px] hover:border-black">
            Marcar Churras!
          </button>
        </div>

        <div className="flex w-full items-center text-center">
          <p className="text-[21px] text-[rgba(0,0,0,.8)] font-bold">
            Calma ai... você vai pode convidar as pessoas na tela do seu
            churras!
          </p>
        </div>
      </form>
    </div>
  )
}
