import { z } from 'zod'

export const manageGuestsSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'O nome do convidado é obrigatório' })
    .regex(/^[A-Za-z]+$/i, 'Apenas letras são permitidas'),
  email: z.string().min(1, { message: 'O e-mail do convidado é obrigatório' }),
  paymentValue: z
    .number()
    .min(1, { message: 'O valor a ser pago deve ser maior que 1' }),
  isPayed: z.boolean(),
})

export type manaGuestsFormData = z.infer<typeof manageGuestsSchema>
