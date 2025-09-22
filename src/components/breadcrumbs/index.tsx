'use client'

import './style.css'
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import * as mui from '@mui/material'
import {useTheme} from '@/utils/mui-theme'

export default function Breadcrumbs() {
  const pathname = usePathname().replace('/', ' ').trimStart()
  const pathlist = pathname.split('/')

  return (
    <mui.ThemeProvider theme={useTheme()}>
      <mui.Breadcrumbs
        aria-label="breadcrumb"
        separator="&#9733;"
        className="custom-breadcrumbs"
      >
        <mui.Link href="/portfolio" underline="hover" color="inherit">
          Home
        </mui.Link>
        {pathlist.map((crumb, index) => {
          const fullPath = '/' + pathlist.slice(0, index + 1).join('/')

          return index === pathlist.length - 1 ? (
            <mui.Typography
              key={crumb}
              sx={{color: 'text.primary', textTransform: 'capitalize'}}
            >
              {crumb
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </mui.Typography>
          ) : (
            <mui.Link
              key={crumb}
              component={Link}
              href={fullPath}
              underline="hover"
              color="inherit"
              sx={{textTransform: 'capitalize'}}
            >
              {crumb
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </mui.Link>
          )
        })}
      </mui.Breadcrumbs>
    </mui.ThemeProvider>
  )
}
