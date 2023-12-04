'use client'
import InviteGuests from '@/components/guests/InviteGuests'
import { useChurrasStore } from '@/store'
import { notFound } from 'next/navigation'

export default function ManageGuests(props: { params: { id: string } }) {
  const { churras } = useChurrasStore((state) => state)
  const [foundedChurras] = churras.filter((x) => x.id === props.params.id)

  if (!foundedChurras) {
    return notFound()
  }

  return (
    <InviteGuests
      guests={foundedChurras.guests}
      churrasId={foundedChurras.id}
    />
  )
}
