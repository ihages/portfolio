'use client'

import {useSearchParams} from 'next/navigation'
import {pieces} from './pieces'
import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material'
import {usePathname} from 'next/navigation'
import Image from 'next/image'

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
          <h1>Art Gallery</h1>
          {/* todo : add a sort and filter here */}
          <p>
            Welcome to my art gallery! So much of my design process as an
            engineer has stemmed from my love of art and the strategic eye I
            have gained through my learning process. I started self-teaching in
            first grade, starting out writing comics with my friends. Years and
            buckets of supplies later, I have amassed a gallery worth of art, my
            favorites of which are displayed here.
            <br />
            No solo-piece is to be used without my written approval.
          </p>
          <div className="flex gap-[20px]">
            <ImageList cols={3}>
              {pieces.map((p) => (
                <ImageListItem
                  className="cursor-pointer list-none before:display-none"
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
                    subtitle={p.materials.join(', ')}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </>
    )
  } else if (pieces.some((p) => p.title === title)) {
    const piece_info = pieces.find((p) => p.title === title)
    return (
      <>
        <title>{`Ihages | ${title}`}</title>
        <meta name="description" content={`Gallery: ${title}`} />
        <div className="galleries">
          <main className="flex flex-row gap-3 ">
            <div id="details" className="">
              <h1>{title}</h1>
              {piece_info ? (
                <div key={piece_info.title}>
                  <p>{piece_info.date.toString()}</p>
                  <p>Materials</p>
                  <ul className="pl-4">
                    {piece_info.materials.map((m, i) => (
                      <li key={`${m}-${i}`}>&#9733; {m}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Description:</strong> {piece_info.description}
                  </p>
                </div>
              ) : null}
            </div>
            {piece_info?.imgUrl ? (
              <Image
                src={piece_info.imgUrl}
                height={400}
                width={400}
                className="w-[50%] max-h-[calc(100vh-50px)] self-center translate-[25%]"
                alt={piece_info.title ?? ''}
              />
            ) : null}
          </main>
        </div>
      </>
    )
  }
  return null
}
