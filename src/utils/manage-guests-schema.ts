import { z } from 'zod'

export const manageGuestsSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'O nome do convidado é obrigatório' })
    .regex(/^[A-Za-z]+$/i, 'Apenas letras são permitidas'),
  email: z
    .string()
    .min(1, { message: 'O e-mail do convidado é obrigatório' })
    .regex(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      { message: 'O formato do e-mail está inválido' },
    ),
  paymentValue: z
    .string()
    .min(1, { message: 'O valor a ser pago deve ser maior que 1' }),
})

export type ManageGuestsFormData = z.infer<typeof manageGuestsSchema>
