
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WebBudd - Gateway to Web Development',
  description: 'Gateway to Web Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className = "px-[5%] bg-black font-inter">
      <Navbar/>
      {children}
      </body>
    </html>
  )
}
