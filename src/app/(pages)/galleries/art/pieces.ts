export type pieceProps = {
  title: string
  date: Date
  materials: string[]
  description: string
  imgUrl: string
}

export const pieces: pieceProps[] = [
  {
    title: 'Placeholder',
    date: new Date('March 2021'),
    materials: ['acrylic paint'],
    description: 'this is a placeholder right now',
    imgUrl: '/portfolio/images/404Screen.png',
  },
]
