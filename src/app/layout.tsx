import { NavBar } from '@components/NavBar'
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
      <div className='flex flex-col items-center justify-between pt-10'>
        <NavBar />
        <div>{children}</div>
      </div>
    </html>
  )
}
