import { NavBar } from '@components/NavBar'
import { Search } from '@components/Search'
import './globals.css'

export const metadata = {
  title: 'Meme Gift',
  description: 'The Meme Gift Web Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col items-center justify-between pt-10'>
        <NavBar />
        <Search />
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
