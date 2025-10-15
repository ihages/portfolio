import {LinkMap} from '@/linkmap'
import React from 'react'
import './style.css'
import Image from 'next/image'

const IHLogo =
  process.env.NODE_ENV === 'production'
    ? 'https://ihages.github.io/portfolio/images/IHlogo.png'
    : 'http://localhost:3000/portfolio/images/IHlogo.png'

export default function Header() {
  return (
    <header className="header">
      <div className="flex flex-row gap-6">
        <Image src={IHLogo} width={24} height={24} alt="IH logo" />
        {LinkMap.map((link) => (
          <a key={link.name} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
    </header>
  )
}
