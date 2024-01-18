
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WebBudd - Gateway to Web Development',
  description: 'Gateway to Web Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className = "px-[8%] font-inter h-[50rem] w-full dark:bg-black bg-black dark:bg-dot-white/[0.08] bg-dot-white/[0.08] relative ">
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
