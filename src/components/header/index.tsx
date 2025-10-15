import {LinkMap} from '@/linkmap'
import React from 'react'
import './style.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="header">
      <div className="flex flex-row gap-6">
        <Image
          src="/portfolio/images/IHlogo.png"
          width={24}
          height={24}
          alt="IH logo"
        />
        {LinkMap.map((link) => (
          <a key={link.name} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
    </header>
  )
}
