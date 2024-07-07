import "./global.css";
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
 
import Footer from './components/Footer'
const NavBar = dynamic(() => import('app/components/NavBar'), { ssr: false })

 
export const metadata: Metadata = {
  title: 'Sudip Halder',
  description: 'Sudip Halder is a Software Developer and a Machine Learning expert. Read his blogs on Machine Learning and AI, and learn more about his projects and experiences.',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
        <head>    
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        </head>
        <body>
            <NavBar />
            <div id="navbar-spacer" style={{height:'60px', backgroundColor: "rgb(8,8,8)"}}></div>
            <div id="root">{children}</div>
            <Footer />
        </body>
    </html>
    )
  }