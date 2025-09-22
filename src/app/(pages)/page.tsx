import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Ihages | Home',
  description:
    "Isabelle Hageman's portfolio and web development testing grounds",
}

export default function Home() {
  return <div className="page-body">hi</div>
}
