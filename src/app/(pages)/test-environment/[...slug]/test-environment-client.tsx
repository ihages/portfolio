'use client'

import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import PageNotFound from '@/components/pageNotFound'
import {
  ShadA,
  ShadB,
  ShadC,
  ShadD,
  ShadHM,
  ShadNR,
  ShadS,
  ShadT,
} from './shad-pages'
import {
  MUIDataDisplay,
  MUIFeedback,
  MUIInputs,
  MUILayout,
  MUINavigation,
  MUISurfaces,
  MUIUtils,
} from './mui-pages'
import {
  ComparisonDataDisplay,
  ComparisonFeedback,
  ComparisonInputs,
  ComparisonNavigation,
  ComparisonSurfaces,
  ComparisonLayouts,
  ComparisonUtils,
} from './comparison-pages'

interface TestEnvironmentClientProps {
  slug: string[]
}

export default function TestEnvironmentClient({
  slug,
}: TestEnvironmentClientProps) {
  const slugValue = slug?.[0]

  let prevPage
  let nextPage
  let slugpage

  switch (slugValue) {
    case 'shad-a':
      slugpage = <ShadA />
      prevPage = null
      nextPage = 'B'
      break
    case 'shad-b':
      slugpage = <ShadB />
      prevPage = 'A'
      nextPage = 'C'
      break
    case 'shad-c':
      slugpage = <ShadC />
      prevPage = 'B'
      nextPage = 'D'
      break
    case 'shad-d':
      slugpage = <ShadD />
      prevPage = 'C'
      nextPage = 'H-M'
      break
    case 'shad-h-m':
      slugpage = <ShadHM />
      prevPage = 'D'
      nextPage = 'N-R'
      break
    case 'shad-n-r':
      slugpage = <ShadNR />
      prevPage = 'H-M'
      nextPage = 'S'
      break
    case 'shad-s':
      slugpage = <ShadS />
      prevPage = 'N-R'
      nextPage = 'T'
      break
    case 'shad-t':
      slugpage = <ShadT />
      prevPage = 'S'
      nextPage = null
      break
    case 'mui-data-display':
      slugpage = <MUIDataDisplay />
      prevPage = null
      nextPage = 'Feedback'
      break
    case 'mui-feedback':
      slugpage = <MUIFeedback />
      prevPage = 'Data Display'
      nextPage = 'Inputs'
      break
    case 'mui-inputs':
      slugpage = <MUIInputs />
      prevPage = 'Feedback'
      nextPage = 'Layout'
      break
    case 'mui-layouts':
      slugpage = <MUILayout />
      prevPage = 'Inputs'
      nextPage = 'Navigation'
      break
    case 'mui-navigation':
      slugpage = <MUINavigation />
      prevPage = 'Layout'
      nextPage = 'Surfaces'
      break
    case 'mui-surfaces':
      slugpage = <MUISurfaces />
      prevPage = 'Navigation'
      nextPage = 'Utils'
      break
    case 'mui-utils':
      slugpage = <MUIUtils />
      prevPage = 'Surfaces'
      nextPage = null
      break
    case 'comparison-data-display':
      slugpage = <ComparisonDataDisplay />
      prevPage = null
      nextPage = 'Feedback'
      break
    case 'comparison-feedback':
      slugpage = <ComparisonFeedback />
      prevPage = 'Data Display'
      nextPage = 'Inputs'
      break
    case 'comparison-inputs':
      slugpage = <ComparisonInputs />
      prevPage = 'Feedback'
      nextPage = 'Layouts'
      break
    case 'comparison-layouts':
      slugpage = <ComparisonLayouts />
      prevPage = 'Inputs'
      nextPage = 'Navigation'
      break
    case 'comparison-navigation':
      slugpage = <ComparisonNavigation />
      prevPage = 'Layouts'
      nextPage = 'Surfaces'
      break
    case 'comparison-surfaces':
      slugpage = <ComparisonSurfaces />
      prevPage = 'Navigation'
      nextPage = 'Utils'
      break
    case 'comparison-utils':
      slugpage = <ComparisonUtils />
      prevPage = 'Surfaces'
      nextPage = null
      break
    default:
      return (
        <div className="pt-[100px]">
          <PageNotFound />
        </div>
      )
  }

  return (
    <div className="page-body testing">
      <h1 className="flex justify-center m-[0px]">
        {slugValue?.replace(/-/g, ' ').toUpperCase()}
      </h1>
      <div className="nav-buttons">
        <div className="nav-buttons-left">
          {prevPage && (
            <Button asChild variant={'default'} size={'default'}>
              <Link href={getNavigationUrl(slugValue, 'prev')}>{prevPage}</Link>
            </Button>
          )}
        </div>
        <div className="nav-buttons-right">
          {nextPage && (
            <Button asChild variant={'default'} size={'default'}>
              <Link href={getNavigationUrl(slugValue, 'next')}>{nextPage}</Link>
            </Button>
          )}
        </div>
      </div>
      {slugpage}
      <div className="nav-buttons">
        <div className="nav-buttons-left">
          {prevPage && (
            <Button asChild variant={'default'} size={'default'}>
              <Link href={getNavigationUrl(slugValue, 'prev')}>{prevPage}</Link>
            </Button>
          )}
        </div>
        <div className="nav-buttons-right">
          {nextPage && (
            <Button asChild variant={'default'} size={'default'}>
              <Link href={getNavigationUrl(slugValue, 'next')}>{nextPage}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

// Helper function to get the correct navigation URL
function getNavigationUrl(
  currentSlug: string,
  direction: 'prev' | 'next'
): string {
  const routes = {
    // Shad routes
    'shad-a': {prev: null, next: 'shad-b'},
    'shad-b': {prev: 'shad-a', next: 'shad-c'},
    'shad-c': {prev: 'shad-b', next: 'shad-d'},
    'shad-d': {prev: 'shad-c', next: 'shad-h-m'},
    'shad-h-m': {prev: 'shad-d', next: 'shad-n-r'},
    'shad-n-r': {prev: 'shad-h-m', next: 'shad-s'},
    'shad-s': {prev: 'shad-n-r', next: 'shad-t'},
    'shad-t': {prev: 'shad-s', next: null},

    // MUI routes
    'mui-data-display': {prev: null, next: 'mui-feedback'},
    'mui-feedback': {prev: 'mui-data-display', next: 'mui-inputs'},
    'mui-inputs': {prev: 'mui-feedback', next: 'mui-layouts'},
    'mui-layouts': {prev: 'mui-inputs', next: 'mui-navigation'},
    'mui-navigation': {prev: 'mui-layouts', next: 'mui-surfaces'},
    'mui-surfaces': {prev: 'mui-navigation', next: 'mui-utils'},
    'mui-utils': {prev: 'mui-surfaces', next: null},

    // Comparison routes
    'comparison-data-display': {prev: null, next: 'comparison-feedback'},
    'comparison-feedback': {
      prev: 'comparison-data-display',
      next: 'comparison-inputs',
    },
    'comparison-inputs': {
      prev: 'comparison-feedback',
      next: 'comparison-layouts',
    },
    'comparison-layouts': {
      prev: 'comparison-inputs',
      next: 'comparison-navigation',
    },
    'comparison-navigation': {
      prev: 'comparison-layouts',
      next: 'comparison-surfaces',
    },
    'comparison-surfaces': {
      prev: 'comparison-navigation',
      next: 'comparison-utils',
    },
    'comparison-utils': {prev: 'comparison-surfaces', next: null},
  }

  const route = routes[currentSlug as keyof typeof routes]
  const targetSlug = route?.[direction]

  return targetSlug ? `/test-environment/${targetSlug}` : '#'
}
