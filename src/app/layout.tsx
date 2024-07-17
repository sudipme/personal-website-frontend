import "./global.css";
import { CSSProperties } from "react";
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Exo, Montserrat, Raleway } from 'next/font/google'
 
import {BaseUrl} from "@utils/config.js";
import defaultLinkPreview from "@public/images/default-link-preview.png";
import Footer from './components/Footer'
const NavBarWrapper = dynamic(() => import('app/components/NavBarWrapper'), { ssr: false })

 
export const metadata: Metadata = {
  title: 'Sudip Halder',
  description: 'Sudip Halder is a Software Developer and a Machine Learning expert. Read his Blogs on Machine Learning and AI.',
  metadataBase: new URL(BaseUrl),
  openGraph: {
    title: 'Sudip Halder',
    description: 'Sudip Halder is a Software Developer and a Machine Learning expert. Read his Blogs on Machine Learning and AI.',
    type: 'website',
    url: BaseUrl,
    images: [
      {
        url: defaultLinkPreview.src,
        width: 800,
        height: 600,
        alt: "Sudip Halder",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudip Halder',
    description: 'Sudip Halder is a Software Developer and a Machine Learning expert. Read his Blogs on Machine Learning and AI.',
    images: [defaultLinkPreview.src],
  },
}

const exo = Exo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en" className={`${exo.variable} ${montserrat.variable} ${raleway.variable}`}>
        <head></head>
        <body>
            <NavBarWrapper />
            <div id="navbar-spacer" style={{height:'60px', backgroundColor: "rgb(8,8,8)"}}></div>
            <div id="root">{children}</div>
            <Footer />
        </body>
    </html>
    )
  }