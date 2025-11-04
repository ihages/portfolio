import type {Metadata} from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ihages | Home',
  description:
    "Isabelle Hageman's portfolio and web development testing grounds",
}

export default function Home() {
  return (
    <div className="page-body home">
      <div className=" flex gap-10">
        <div>
          <h1>Hi, I&apos;m Isabelle!</h1>
          <p>
            I&apos;m an aspiring full-stack developer, majoring in Computer
            Science and minoring in Robotics at the University of Cincinnati.
            <br />
            <br />I am extrememly passionate in learning and expanding my
            skillset, all the way from circuitry to graphic design.
            <br />
            <br />
            I&apos;m a proud alum of GirlsWhoCode and the INTERalliance of
            Greater Cincinnati.
          </p>
        </div>
        <div className="w-[40vw]">
          <Image
            width={400}
            height={400}
            className="rounded-lg"
            src="/portfolio/images/Isabelle_Hageman.jpg"
            alt="A picture of me leaning against a wall in a cafe"
          />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <h2>Tech Stack</h2>
        <h2>Art Supplies</h2>
        <ul>
          <li>TypeScript/Javascript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Python</li>
          <li>C++</li>
          <li>SQL</li>
          <li>Prolog</li>
          <li>LC-3 Assembly Language</li>
        </ul>

        <ul>
          <li>Artist Loft Acrylic Paints</li>
          <li>Ohuhu alcohol markers</li>
          <li>Bianyo alcohol markers</li>
          <li>Procreate for Ipad</li>
          <li>Various mechanical pencils/pens</li>
          <li>Prismacolor Colored Pencils</li>
          <li>Gelly Roll white pens</li>
        </ul>
      </div>
    </div>
  )
}
