import './globals.css'
import type { Metadata } from 'next'
import Nav from './partials/Nav'
import Footer from './partials/Footer'

export const metadata: Metadata = {
  title: 'Deborah Moreira',
  description: 'Conheça meu portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
