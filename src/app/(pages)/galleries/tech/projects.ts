export type projectProps = {
  title: string
  date: Date
  technologies: string[]
  description: string
  imgUrl: string
}

export const projects: projectProps[] = [
  {
    title: 'Placeholder',
    date: new Date('March 2021'),
    technologies: ['python'],
    description: 'this is a placeholder right now',
    imgUrl: '/portfolio/images/404Screen.png',
  },
]
