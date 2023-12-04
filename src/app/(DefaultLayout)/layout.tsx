import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import '../globals.css'
import Image from 'next/image'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Churras by Trinca',
  description: 'Site para agendar e organizar um belo churras!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const isLoggedIn = localStorage.getItem('isLoggedIn')
  // if(!isLoggedIn) {
  //   push
  // }
  return (
    <html lang="pt-br" className="bg-white py-3">
      <body
        className={
          raleway.className + ' ' + 'w-5/6 m-auto max-w-[636px] bg-[#FAFAFA]'
        }
      >
        <header className="bg-[#ffd836] text-black font-extrabold text-[32px] flex justify-center items-center bg-header-background min-h-[200px]">
          Agenda de Churras
        </header>
        <main className="flex flex-col items-center justify-between px-6 ">
          {children}
        </main>
        <footer className="w-full flex justify-center items-center p-10">
          <Image
            src="/assets/trinca_logo_footer.png"
            alt="Trinca"
            width={48}
            height={48}
          />
        </footer>
      </body>
    </html>
  )
}
