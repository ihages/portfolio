export type projectProps = {
  title: string
  date: Date
  technologies?: string[]
  description: string
  imgUrl: string
}

export const projects: projectProps[] = [
  // {
  //   title: 'Placeholder',
  //   date: new Date('March 2021'),
  //   technologies: ['python'],
  //   description: 'this is a placeholder right now',
  //   imgUrl: '/portfolio/images/404Screen.png',
  // },
  {
    title: 'Portfolio Website (Alpha)',
    date: new Date('June 2023'),
    technologies: ['HTML', 'CSS'],
    description:
      'My first official programming project was a vanilla HTML/CSS website. This was programmed as an assignment through the Summer Immersion Program by Girls Who Code. The original project was programmed on and hosted on Replit before the platform ended their legacy hosting. As of now, the project has no production site. The code can be found at https://github.com/ihages/Portfolio-Website',
    imgUrl: '/portfolio/images/OGPortfolio.png',
  },
  {
    title: 'ADHFree | ADHD Symptom Tracker (Concept)',
    date: new Date('February 2024'),
    description:
      "This concept project saught to invent a platform where people with ADHD could track their ADHD symptoms. This project was done with the Seton High School chapter of the INTERalliance of Greater Cincinnati for the March 2024 monthly challenge. Teams were tasked with creating a technology that helped with a medical concern of the chapter's choice.",
    imgUrl: '/portfolio/images/ADHFree.png',
  },
]
