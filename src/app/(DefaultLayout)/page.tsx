'use client'
import ChurrasCard from '@/components/churras/ChurrasCard'
import CreateChurrasCard from '@/components/churras/CreateChurrasCard'
import { useChurrasStore } from '@/store'
import { compareAsc } from 'date-fns'
import Link from 'next/link'

export default function Home() {
  const state = useChurrasStore((state) => state.churras)
  const list = state.sort((a, b) => {
    return compareAsc(a.date, b.date)
  })

  return (
    <div className="-mt-10 flex flex-wrap gap-6 justify-center md:justify-normal">
      <Link href="/churras/create">
        <CreateChurrasCard />
      </Link>
      {list.map((churras) => (
        <Link href={`/churras/${churras.id}`} key={churras.id}>
          <ChurrasCard
            id={churras.id}
            date={churras.date}
            guests={churras.guests}
            maxPayment={churras.maxPayment}
            minPayment={churras.minPayment}
            title={churras.title}
          />
        </Link>
      ))}
    </div>
  )
}
