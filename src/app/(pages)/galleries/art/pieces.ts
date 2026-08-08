import {ReactNode} from 'react'

export type pieceProps = {
  title: string
  date: Date
  materials: string[]
  description: string | ReactNode
  imgUrl: string
}

export const pieces: pieceProps[] = [
  {
    title: 'The Canal: Between Worlds',
    date: new Date('2021-03-30'),
    materials: [
      'Bianyo Alcohol Markers',
      'GellyRoll White Pens',
      'Artist Loft Black Illustration Pens',
    ],
    description:
      "Featured in Ohio Art Education Association's Emerging Artist High School Art Exhibition in Columbus, OH in 2021, this piece was part of a multimedium series using the Indianapolis Canal as reference. This piece plays on inverted color pallets, resembling a hellish alternative to the canal.",
    imgUrl: '/portfolio/images/CanalBetweenWorlds.png',
  },
  {
    title: "The Canal: Nature's Domestication",
    date: new Date('2021-03-30'),
    materials: [
      'Artist Lost Acrylic Paints',
      'Picture Frame',
      'Fasafe PVC Backsplash Panel',
    ], //https://www.homedepot.com/p/Fasade-18-25-in-x-24-25-in-Crosshatch-Silver-Traditional-Style-4-PVC-Decorative-Backsplash-Panel-B51-21/100521697
    description:
      'Blue ribbon wining piece at the 2022 Harvest Home Fair in Cheviot, OH, this piece is part of the multimedium canal collection, achieved by painting on the glass of a picture frame with PVC backsplash behind it.',
    imgUrl: '/portfolio/images/TheCanalGlass.png',
  },
  {
    title: 'The Art of Becoming Fertilizer',
    date: new Date('2021-12-1'),
    materials: [
      'Crayola Watercolor',
      'Artist Loft Black Illustration Pens',
      'Procreate',
      'GellyRoll White Pens',
    ],
    description:
      'Featured in the 2022 Harvest Home Fair in Cheviot, OH, this piece was an impression of a still life using flowers and a miniature coffin. The piece falls into my Life and Death collection, admiring the circle of life and how decay yeilds new life and vice versa.',
    imgUrl: '/portfolio/images/Fertilizer.png',
  },
]
