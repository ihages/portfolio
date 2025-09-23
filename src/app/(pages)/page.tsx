import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Ihages | Home',
  description:
    "Isabelle Hageman's portfolio and web development testing grounds",
}

export default function Home() {
  return (
    <div className="page-body home">
      <h1>Hi, I&apos;m Isabelle Hageman</h1>
      <p>
        I&apos;m an aspiring full-stack developer, majoring in Computer Science
        and minoring in Robotics at the University of Cincinnati.
        <br />
        <br />I am extrememly passionate in learning and expanding my skillset,
        all the way from circuitry to graphic design.
        <br />
        <br />
        I&apos;m a proud alum of GirlsWhoCode and the INTERalliance of Greater
        Cincinnati.
      </p>
    </div>
  )
}
