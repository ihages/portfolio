'use client'

import Breadcrumbs from '@/components/breadcrumbs'
import {useSearchParams} from 'next/navigation'
import {pieces} from './pieces'
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
                    style={{maxHeight: '400px'}}
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
        <div className="page-body galleries">
          <Breadcrumbs />
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
              <img
                src={piece_info.imgUrl}
                width={400}
                height={400}
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
