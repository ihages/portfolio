'use client'

import {useSearchParams} from 'next/navigation'
import {projects} from './projects'
import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material'
import {usePathname} from 'next/navigation'
import Image from 'next/image'
import {date} from 'zod'

export default function Galleries() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const title = searchParams.get('title')
  if (!title) {
    return (
      <>
        <title>Ihages | Galleries</title>
        <meta name="description" content="" />
        <div className="galleries">
          <h1>Tech and STEM Portfolio</h1>
          {/* todo : add a sort and filter here */}
          <p>
            Ever since I was little, I found myself fascinated with the way that
            computers worked. Years of learning later, I have been improving and
            scaling my knowledge to not only answer my questions, but use the
            answers to solve new problems. Here is an incomplete list of some of
            the works I have done that have led me to where I am today. <br />
            <br />
            The list is incomplete as of 8.7.2026. For any questions, feel free
            to contact me.
          </p>
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
                  <Image
                    src={`${p.imgUrl}`}
                    alt={p.title}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="w-fit min-w-[calc(100%/3-20px)] h-auto"
                    objectFit="cover"
                  />
                  <ImageListItemBar
                    title={p.title}
                    subtitle={
                      p.technologies
                        ? p.technologies.join(', ')
                        : 'Concept Product'
                    }
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
        <div className="galleries">
          <h1>{title}</h1>
          {piece_info && (
            <div key={piece_info.title}>
              <p>{piece_info.title}</p>
              <p>{piece_info.date.toString()}</p>
              {piece_info.technologies && (
                <>
                  <p>Technologies</p>
                  <ul className="pl-4">
                    {piece_info.technologies.map((m, i) => (
                      <li key={`${m}-${i}`}>&#9733; {m}</li>
                    ))}
                  </ul>
                </>
              )}
              <p>{piece_info.description}</p>
            </div>
          )}
          {piece_info?.imgUrl && (
            <Image
              src={piece_info.imgUrl}
              height={400}
              width={400}
              className="w-[50%] max-h-[calc(100vh-50px)] self-center translate-[25%]"
              alt={piece_info.title ?? ''}
            />
          )}
        </div>
      </>
    )
  }
  return null
}
