export interface Guests {
  name: string
  email: string
  paymentValue: number
  isPayed: boolean
  isOwner: boolean
}

export interface Churras {
  id: string | number
  title: string
  date: Date
  maxPayment: number
  minPayment: number
  guests: Guests[]
}

export interface ChurrasList extends Churras {
  guestsCount: number
  totalPayment: number
}
