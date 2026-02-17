'use client'
import {useTheme} from '@/utils/mui-theme'
import {Button, ThemeProvider} from '@mui/material'
import './style.css'
import Breadcrumbs from '@/components/breadcrumbs'
import Link from 'next/link'

export default function Galleries() {
  const theme = useTheme()
  return (
    <>
      <title>Ihages | Galleries</title>
      <meta name="description" content="" />
      <Breadcrumbs />
      <div className="page-body galleries">
        <Breadcrumbs />
        <h1>Galleries</h1>
        <p>View my work across mediums and dedications</p>
        <div className="flex flex-col">
          <h2 className="m-0">Art</h2>
          <Link href="galleries/art">
            <div className="w-52 h-52 grid grid-cols-2 grid-rows-2 border border-border rounded p-2 gap-2 bg-background">
              {pieces.slice(0, 4).map((p, i) => (
                <img
                  key={i}
                  src={p.imgUrl}
                  alt={p.title}
                  className="w-full h-full object-cover rounded bg-muted"
                />
              ))}
              {pieces.length < 4 &&
                Array.from({length: 4 - pieces.length}).map((_, i) => (
                  <div
                    key={`placeholder-${i}`}
                    className="w-full h-full rounded bg-muted"
                  />
                ))}
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
