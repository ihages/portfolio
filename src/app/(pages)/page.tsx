import type {Metadata} from 'next'
import Image from 'next/image'
import Portrait from '@/../public/images/Isabelle_Hageman.jpg'

export const metadata: Metadata = {
  title: 'Ihages | Home',
  description:
    "Isabelle Hageman's portfolio and web development testing grounds",
}

export default function Home() {
  return (
    <div className="home">
      <div className="w-full text-center">
        <h1 className=" !mb-0 underline decoration-dashed decoration-primary">
          Isabelle Hageman
        </h1>
        <p className="font-semibold !mt-0">
          <i>Developer and Software Engineering Student</i>
        </p>
      </div>
      <h2>About Me</h2>
      <div className="flex flex-row gap-6">
        <p>
          I am an undergraduate student at the University of Cincinnat studying
          for a Bachelor&apos;s in Computer Science with a Certificate in
          Software Engineering. Outside of school, I work as a Software
          Developer with a primary focus on front end development. As I prepare
          to graduate in Spring of 2028, I aspire to expand my knowlege base to
          include more full-stack skills, including web archetecture, backend
          and middleware code, and database management.
          <br />
          <br />
          Outside of technology, I am a huge creative and spend my time drawing,
          crafting, or building in Minecraft (yes, it&apos;s an art form). I am
          a former muralist apprentice, having worked with ArtWorks (now 1001
          colors). I am also &mdash; as I call myself &mdash; a former clown,
          having worked as a face painter for the Cincinnati Circus Company.
          <br />
          <br />
          For me, art and technology go hand-in-hand. Both sides of creation
          work in tandem, and I am dedicated to preserving and building my
          skills in both.
        </p>
        <Image
          className="max-w-[400px] h-auto aspect-square rounded-xl"
          src={Portrait}
          alt="Isabelle Hageman Portrait"
        />
      </div>
      <h2>Featured In</h2>
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
      <h2>Contact</h2>
      <ul className="star-list">
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
