'use client'

import Breadcrumbs from '@/components/breadcrumbs'
import {useSearchParams} from 'next/navigation'
import {projects} from './projects'
import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material'
import {usePathname} from 'next/navigation'

export default function Galleries() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const title = searchParams.get('title')
  if (!title) {
    return (
      <>
        <title>Ihages | Galleries</title>
        <meta name="description" content="" />
        <div className="page-body galleries">
          <Breadcrumbs />
          <h1>Tech and STEM Portfolio</h1>
          {/* todo : add a sort and filter here */}
          <p>text goes here</p>
          <div className="flex gap-[20px]">
            <ImageList cols={3}>
              {projects.map((p) => (
                <ImageListItem
                  key={p.title}
                  onClick={() =>
                    window.history.pushState(
                      {},
                      '',
                      `${pathname}?title=${p.title}`
                    )
                  }
                >
                  <img
                    srcSet={`${p.imgUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${p.imgUrl}?w=164&h=164&fit=crop&auto=format`}
                    alt={p.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={p.title}
                    subtitle={p.technologies.join(', ')}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </>
    )
  } else if (projects.some((p) => p.title === title)) {
    const piece_info = projects.find((p) => p.title === title)
    return (
      <>
        <title>{`Ihages | ${title}`}</title>
        <meta name="description" content={`Gallery: ${title}`} />
        <div className="page-body galleries">
          <Breadcrumbs />
          <h1>{title}</h1>
          {piece_info ? (
            <div key={piece_info.title}>
              <p>{piece_info.title}</p>
              <p>{piece_info.date.toString()}</p>
              <p>technologies</p>
              <ul className="pl-4">
                {piece_info.technologies.map((m, i) => (
                  <li key={`${m}-${i}`}>&#9733; {m}</li>
                ))}
              </ul>
              <p>{piece_info.description}</p>
            </div>
          ) : null}
          {piece_info?.imgUrl ? (
            <img
              src={piece_info.imgUrl}
              width={400}
              height={400}
              alt={piece_info.title ?? ''}
            />
          ) : null}
        </div>
      </>
    )
  }
  return null
}
