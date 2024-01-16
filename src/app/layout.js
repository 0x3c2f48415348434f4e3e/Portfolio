import { Inter } from 'next/font/google'
//import './globals.css'
import '/src/css/style.css'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HashCon',
  description: 'My Portfolio',
  icons: {
    icon: '/logo.png', // /public path
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        </body>
    </html>

  )
}
