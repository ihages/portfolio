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
      <div className="page-body galleries">
        <Breadcrumbs />
        <h1>Galleries</h1>
        <p>
          At my very roots, I am a creative. For that reason, I like to show
          both my technical and artistic sides of my creativity as much as I
          can. Here you will find both my art and my projects, both of which
          have contributed largely to my professional development and career.
        </p>
        <ThemeProvider theme={theme}>
          <Button component={Link} href="galleries/art">
            Art
          </Button>
          <Button component={Link} href="galleries/tech">
            Tech
          </Button>
        </ThemeProvider>
      </div>
    </>
  )
}
