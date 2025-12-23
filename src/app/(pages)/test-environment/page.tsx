'use client'

import {Button} from '@/components/ui/button'
import './style.css'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import * as mui from '@mui/material'
import {useTheme} from '@/utils/mui-theme'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function TestEnvironment() {
  return (
    <>
      <title>Ihages | Testing Environment</title>
      <meta
        name="description"
        content="Isabelle Hageman's testing environment for various style libraries and front-end functionality"
      />
      <Breadcrumbs />
      <div className="page-body testing">
        <h1>Testing Grounds</h1>
        <h2>ShadCN versus MUI</h2>
        <div className="flex gap-[20px]">
          <Button asChild>
            <Link href="test-environment/comparison-data-display">
              Data Displays
            </Link>
          </Button>
          <Button asChild>
            <Link href="test-environment/comparison-feedback">Feedback</Link>
          </Button>
          <Button asChild>
            <Link href="test-environment/comparison-inputs">Inputs</Link>
          </Button>
          <Button asChild>
            <Link href="test-environment/comparison-layouts">Layouts</Link>
          </Button>
          <Button asChild>
            <Link href="test-environment/comparison-navigation">
              Navigation
            </Link>
          </Button>
          <Button asChild>
            <Link href="test-environment/comparison-surfaces">Surfaces</Link>
          </Button>
          <Button asChild>
            <Link href="test-environment/comparison-utils">Utils</Link>
          </Button>
        </div>
        <div className="mt-[20px]">
          <mui.ThemeProvider theme={useTheme()}>
            <mui.Accordion>
              <mui.AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                area-controls="accordion-content"
                id="accordion-header"
              >
                <mui.Typography component="span">
                  Components by Library
                </mui.Typography>
              </mui.AccordionSummary>
              <mui.AccordionDetails>
                <h3>Shadcn Components</h3>
                <div className="flex gap-[20px]">
                  <Button asChild>
                    <Link href="test-environment/shad-a">A</Link>
                  </Button>
                  <Button asChild>
                    <Link href="test-environment/shad-b">B</Link>
                  </Button>
                  <Button asChild>
                    <Link href="test-environment/shad-c">C</Link>
                  </Button>
                  <Button asChild>
                    <Link href="test-environment/shad-h-m">H-M</Link>
                  </Button>
                  <Button asChild>
                    <Link href="test-environment/shad-n-r">N-R</Link>
                  </Button>
                  <Button asChild>
                    <Link href="test-environment/shad-s">S</Link>
                  </Button>
                  <Button asChild>
                    <Link href="test-environment/shad-t">T</Link>
                  </Button>
                </div>
                <h3>MUI Components</h3>
                <p>
                  Components use Roboto font by default. Colors do not access
                  global.css. The disabled color&apos;s opacity also has
                  difficulty rendering in dark mode.
                </p>
                <div className="flex gap-[20px]">
                  <mui.ThemeProvider theme={useTheme()}>
                    <mui.Button
                      variant="contained"
                      href="test-environment/mui-data-display"
                    >
                      Data Display
                    </mui.Button>
                    <mui.Button
                      variant="contained"
                      href="test-environment/mui-feedback"
                    >
                      Feedback
                    </mui.Button>
                    <mui.Button
                      variant="contained"
                      href="test-environment/mui-inputs"
                    >
                      Inputs
                    </mui.Button>
                    <mui.Button
                      variant="contained"
                      href="test-environment/mui-layouts"
                    >
                      Layouts
                    </mui.Button>
                    <mui.Button
                      variant="contained"
                      href="test-environment/mui-navigation"
                    >
                      Navigation
                    </mui.Button>
                    <mui.Button
                      variant="contained"
                      href="test-environment/mui-surfaces"
                    >
                      Surfaces
                    </mui.Button>
                    <mui.Button
                      variant="contained"
                      href="test-environment/mui-utils"
                    >
                      Utils
                    </mui.Button>
                  </mui.ThemeProvider>
                </div>
              </mui.AccordionDetails>
            </mui.Accordion>
          </mui.ThemeProvider>
        </div>
        <h2>Shad Blocks</h2>
        <div className="flex gap-[20px]">
          <Button asChild>
            <Link href="test-environment/shad-blocks">Dashboard</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
