'use client'
import ChurrasCard from '@/components/churras/ChurrasCard'
import CreateChurrasCard from '@/components/churras/CreateChurrasCard'
import { useChurrasStore } from '@/store'
import { compareAsc } from 'date-fns'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { push } = useRouter()
  // const isLoggedIn = localStorage.getItem('isLoggedIn')

  // if (!isLoggedIn) {
  //   push('/login')
  // }

  const state = useChurrasStore((state) => state.churras)
  const list = state.sort((a, b) => {
    return compareAsc(a.date, b.date)
  })

  return (
    <div className="-mt-10 flex flex-wrap gap-6 justify-center md:justify-normal">
      <CreateChurrasCard />
      {list.map((churras, index) => (
        <ChurrasCard
          key={churras.title + index}
          id={churras.id}
          date={churras.date}
          guests={churras.guests}
          maxPayment={churras.maxPayment}
          minPayment={churras.minPayment}
          title={churras.title}
        />
      ))}
    </div>
  )
}
