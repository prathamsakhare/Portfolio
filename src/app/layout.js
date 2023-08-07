import './globals.css'
import { Inter } from 'next/font/google'
import {PT_Sans_Narrow} from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// const pt_Sans_Narrow = PT_Sans_Narrow({
//   subsets : ['latin'],
//   variable : '--font-ptsans',
//   weight : ['400', '700']
// })
export const metadata = {
  title: 'Prathamesh P. Sakhare',
  description: 'A Portfolio of Prathamesh P. Sakhare',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
