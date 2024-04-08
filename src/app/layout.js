import './globals.css'
import './globals.sass'

// components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          
          {/* COONTENT WRAPPER */}
          <div className="wrapper">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </div>

        </div>
      </body>
    </html>
  )
}
