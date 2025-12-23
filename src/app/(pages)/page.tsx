import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Ihages | Home',
  description:
    "Isabelle Hageman's portfolio and web development testing grounds",
}

export default function Home() {
  return (
    <div className="page-body home">
      <h1 className="pt-[75px] underline decoration-dashed decoration-primary">
        Hi, I&apos;m Isabelle Hageman
      </h1>
      <h2>About Me</h2>
      <ul>
        <li>
          I am a second year at the University of Cincinnati studying for my
          Bachelor&apos;s in Computer Science and Minor in Robotics Engineering
        </li>
        <li>
          I have an expansive background in the arts, including working for
          ArtWorks Cincinnati as a muralist, face painter contractor with the
          Cincinnati Circus, and having multiple pieces in art shows throughout
          grade school and high school
        </li>
        <li>
          I have passions in creative writing, although I haven&apos;t
          published any content. I am dabbling with the idea of starting a blog
        </li>
      </ul>
      <h2>Featured In</h2>
      <ul>
        <li>
          <a
            href="https://www.uc.edu/news/articles/2025/08/co-op-broadens-horizons.html"
            target="_blank"
          >
            Co-op Broadens Horizons
          </a>{' '}
          by{' '}
          <a
            href="https://www.uc.edu/news/search.html?authors=glassei&force-search=true"
            target="_blank"
          >
            Emily Glass
          </a>
        </li>
      </ul>
      <h2>Contact</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/isabelle-hageman/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/ihages" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://uc.joinhandshake.com/profiles/ihageman"
            target="_blank"
          >
            Handshake
          </a>
        </li>
      </ul>
    </div>
  )
}
