import { z } from 'zod'

export const createChurrasSchema = z.object({
  title: z.string().min(1, { message: 'O nome do churras é obrigatório' }),
  date: z
    .string()
    .min(1, { message: 'Data invalida' })
    .regex(
      /(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|[1][0-2])\/[A-Za-z0-9]+/i,
      'Verifique se a data está na forma correta de DIA/MES/ANO',
    ),
  maxPayment: z
    .string()
    .min(1, { message: 'O valor máximo não pode ficar em branco' }),
  minPayment: z
    .string()
    .min(1, { message: 'O valor mínimo não pode ficar em branco' }),
})

export type CreateChurrasFormData = z.infer<typeof createChurrasSchema>
