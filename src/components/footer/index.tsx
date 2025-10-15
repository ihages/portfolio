import {LinkMap} from '@/linkmap'
import React from 'react'
import './style.css'
import Image from 'next/image'

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
        <Image
          src="/portfolio/images/IHlogo.png"
          width={80}
          height={80}
          alt="IH logo"
        />
      </div>
    </footer>
  )
}
