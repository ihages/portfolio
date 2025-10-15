import {LinkMap} from '@/linkmap'
import React from 'react'
import './style.css'
import Image from 'next/image'

const IHLogo =
  process.env.NODE_ENV === 'production'
    ? 'https://ihages.github.io/portfolio/images/IHlogo.png'
    : 'http://localhost:3000/portfolio/images/IHlogo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="left">
        <div className="flex flex-row gap-6">
          {LinkMap.map((link) => (
            <a key={link.name} href={link.url}>
              {link.name}
            </a>
          ))}
        </div>
        <p className="!mb-0">Isabelle Hageman 2025</p>
      </div>
      <div className="right">
        <Image src={IHLogo} width={80} height={80} alt="IH logo" />
      </div>
    </footer>
  )
}
