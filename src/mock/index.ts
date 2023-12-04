import { Churras } from '@/interfaces/IChurras'

export const churras: Churras[] = [
  {
    id: '1',
    title: 'Meu aniversário',
    date: new Date('12/11/2023'),
    maxPayment: 20,
    minPayment: 10,
    guests: [
      { name: 'Julio', isOwner: true, isPayed: true, paymentValue: 20 },
      { name: 'Vitinho', isOwner: false, isPayed: false, paymentValue: 10 },
      { name: 'Amanda', isOwner: false, isPayed: true, paymentValue: 10 },
      { name: 'Wihara', isOwner: false, isPayed: false, paymentValue: 20 },
      { name: 'Vitor', isOwner: false, isPayed: true, paymentValue: 20 },
      { name: 'Thae', isOwner: false, isPayed: true, paymentValue: 10 },
      { name: 'Josy', isOwner: false, isPayed: true, paymentValue: 20 },
    ],
  },
  {
    id: '2',
    title: 'Nascimento de Vitin',
    date: new Date('07/20/2023'),
    maxPayment: 20,
    minPayment: 15,
    guests: [
      { name: 'Julio', isOwner: true, isPayed: true, paymentValue: 20 },
      { name: 'Vitinho', isOwner: false, isPayed: false, paymentValue: 15 },
      { name: 'Amanda', isOwner: false, isPayed: true, paymentValue: 15 },
      { name: 'Wihara', isOwner: false, isPayed: false, paymentValue: 20 },
    ],
  },
  {
    id: '3',
    title: 'Meu churras',
    date: new Date('12/20/2023'),
    maxPayment: 20,
    minPayment: 10,
    guests: [
      { name: 'Julio', isOwner: true, isPayed: true, paymentValue: 20 },
      { name: 'Vitinho', isOwner: false, isPayed: false, paymentValue: 10 },
      { name: 'Amanda', isOwner: false, isPayed: true, paymentValue: 10 },
    ],
  },
  {
    id: '4',
    title: 'Natal',
    date: new Date('12/25/2023'),
    maxPayment: 25,
    minPayment: 15,
    guests: [
      { name: 'Julio', isOwner: true, isPayed: true, paymentValue: 20 },
      { name: 'Vitinho', isOwner: false, isPayed: false, paymentValue: 10 },
      { name: 'Amanda', isOwner: false, isPayed: true, paymentValue: 10 },
      { name: 'Wihara', isOwner: false, isPayed: false, paymentValue: 20 },
      { name: 'Vitor', isOwner: false, isPayed: true, paymentValue: 20 },
      { name: 'Thae', isOwner: false, isPayed: true, paymentValue: 10 },
      { name: 'Josy', isOwner: false, isPayed: true, paymentValue: 20 },
      { name: 'Forinto', isOwner: false, isPayed: false, paymentValue: 20 },
    ],
  },
]
