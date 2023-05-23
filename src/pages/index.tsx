import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Home/Header/Header'
import HomePage from '@/components/Home/Home'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <HomePage/>
  )
}
