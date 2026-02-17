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
        <h1>H1</h1>
        <h2>H2</h2>
        <div className="flex gap-[20px]">div</div>
      </div>
    </>
  )
}
