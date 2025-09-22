import {createTheme} from '@mui/material/styles'
import React from 'react'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#c63939', // var(--primary)
      contrastText: '#ffffff', // var(--primary-foreground)
    },
    secondary: {
      main: '#eac3ce', // var(--secondary)
      contrastText: '#522e37', // var(--secondary-foreground)
    },
    info: {
      main: '#fbefe5', // var(--accent)
      contrastText: '#522e37', // var(--accent-foreground)
    },
    background: {
      default: '#ffeeee', // var(--background)
      paper: '#ffffff', // var(--card)
    },
    text: {
      primary: '#331c22', // var(--foreground)
      secondary: '#6e555d', // var(--muted-foreground)
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff8585', // var(--primary)
      contrastText: '#1a1115', // var(--primary-foreground)
    },
    secondary: {
      main: '#833f50', // var(--secondary)
      contrastText: '#ffffff', // var(--secondary-foreground)
    },
    info: {
      main: '#5c1f1f', // var(--accent)
      contrastText: '#ffffff', // var(--accent-foreground)
    },
    background: {
      default: '#12151c', // var(--background)
      paper: '#130c0e', // var(--card)
    },
    text: {
      primary: '#f5e9ed', // var(--foreground)
      secondary: '#b2a2a8', // var(--muted-foreground)
    },
  },
})

// Custom hook for theme selection
export function useTheme(override?: string) {
  const [browserDarkMode, setBrowserDarkMode] = React.useState(false)
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      setBrowserDarkMode(
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    }
  }, [])

  React.useEffect(() => {
    if (!isClient) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => setBrowserDarkMode(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [isClient])

  // Priority: override first, then browser preference (only on client)
  const shouldUseDarkTheme = React.useMemo(() => {
    if (override === 'dark') return true
    if (override === 'light') return false
    // No override - use browser preference (only on client to avoid hydration issues)
    return isClient && browserDarkMode
  }, [override, isClient, browserDarkMode])

  return shouldUseDarkTheme ? darkTheme : lightTheme
}
