import React from 'react'
import {Metadata} from 'next'
import Breadcrumbs from '@/components/breadcrumbs'
import GalleriesClient from './galleries-client'
interface PageProps {
  params: Promise<{slug: string[]}>
}

// Generate static params for all valid routes
export async function generateStaticParams() {
  const validSlugs = ['slug']

  return validSlugs.map((slug) => ({
    slug: [slug],
  }))
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {slug} = await params
  const slugValue = slug?.[0] || ''

  return {
    title: `Ihages | Testing Environment - ${slugValue.replace(/-/g, ' ')}`,
    description:
      "Isabelle Hageman's testing environment for various style libraries and front-end functionality",
  }
}

export default async function DynamicTestEnvironmentPage({params}: PageProps) {
  const {slug} = await params
  const slugValue = slug?.[0] || ''
  const validSlugs = (await generateStaticParams()).map(
    (param) => param.slug[0]
  )

  return (
    <>
      {!validSlugs.includes(slugValue) ? null : <Breadcrumbs />}
      <div className="page-body testing">
        <GalleriesClient slug={slug} />
      </div>
    </>
  )
}
