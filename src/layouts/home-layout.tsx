import Header from '@/components/organisms/Header'
import type { PropsWithChildren } from 'react'

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
      <Header />
      <main className='min-h-screen container mx-auto px-4 py-8'>
       {children}
      </main>
      <footer className='border backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto p-4 text-center text-gray-400'>
          <p>Made by: mkgnrl.dev@{new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}
