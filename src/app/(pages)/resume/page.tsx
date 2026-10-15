'use client'
import {useTheme} from '@/utils/mui-theme'
import './style.css'

// comment

export default function Resume() {
  const theme = useTheme()
  return (
    <>
      <title>Isabelle Hageman | Resume</title>
      <meta name="description" content="" />

      <div className="resume">
        <h1>Resume</h1>
        <div>
          <h2>Education</h2> <h3>Seton High School</h3>
          <p>
            <strong>Dates:</strong> September 2020 - May 2024
          </p>
          <p>
            <strong>GPA:</strong> 3.99 (unweighted), 4.56 (weighted)
          </p>
          <p>
            <strong>Honors and Awards:</strong>
          </p>
          <ul>
            <li>Honors Program: 2020-2024</li>
            <li>National Honors Society: 2022</li>
            <li>Sociedad Honoraria Hispánica: 2023</li>
            <li>Math Department Award: 2024</li>
            <li>AP Scholar with Distinction: 2024</li>
            <li>Principal&apos;s Award: 2024</li>
          </ul>
          <h3>
            University of Cincinnati, College of Engineering and Applied
            Sciences
          </h3>
          <p>
            <strong>Dates:</strong> August 2024 - May 2028
          </p>
          <p>
            <strong>GPA:</strong> 3.89
          </p>
          <p>
            <strong>Primary Coursework:</strong> Computer Programming,
            Databases, Computer Systems
          </p>
          <p>
            <strong>Honors and Awards:</strong>
          </p>
          <ul>
            <li>Deans List: Fall 2024 - Summer 2026</li>
          </ul>
          <h2>Skills </h2>
          <h3>Programming</h3>
          <ul>
            <li>
              Python: TKinter, Psycopg, FastAPI, Sqlite, Pydantic, Playwright
            </li>
            <li>
              TypeScript: React, Tailwind, ShadCN, Payload CMS, Playwright
            </li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL & PSQL</li>
            <li>Bash</li>
          </ul>
          <h3>Software</h3>
          <ul>
            <li>AWS: S3</li>
            <li>Docker</li>
            <li>GitHub / Git</li>
            <li>Atlassian: Jira, Confluence, Tempo, Loom</li>
            <li>Google Cloud Products: Docs, Sheets, Slides</li>
            <li>
              Microsoft Suite Products: Visual Studio Code, Azure, Word, Excel,
              Powerpoint, Sharepoint
            </li>
            <li>Procreate</li>
          </ul>
          <h3>Operating Systems</h3>
          <ul>
            <li>Microsoft Windows 10 and 11</li>
            <li>Linux Ubuntu</li>
          </ul>
          <h3>Other</h3>
          <ul>
            <li>Various Artistic Mediums</li>
            <li>3D Printing: Printer use and maintenance</li>
          </ul>
          <h2>Experience</h2>
          <h3>Artworks Cincinnati (Feb 2022 - Apr 2022)</h3>
          <p>
            <strong>Muralist Apprentice</strong>
          </p>
          <ul>
            <li>
              Studied under a professional muralist on how to work as a
              freelance artist
            </li>
            <li>
              Collaborated with others to paint the mural &quot;The Roots of
              Walnut Hills&quot;
            </li>
            <li>
              Presented mural progress to stakeholders alongside teammates
            </li>
          </ul>
          <h3>Cincinnati Circus Company (Sep 2021 - Sep 2023)</h3>
          <p>
            <strong>Face Painter and Ride Attendee (Seasonal)</strong>
          </p>
          <ul>
            <li>
              Worked as a contracted entertainer, face painting and operating
              rides for public and private events.
            </li>
            <li>Managed crowds while maintaining focus on the task at hand</li>
          </ul>
          <h3>LaRosa&apos;s Guest Service Center (Feb 2023 - Aug 2024)</h3>
          <p>
            <strong>
              Customer Service Representative (Feb 2023 - Aug 2024)
            </strong>
          </p>
          <ul>
            <li>
              Recieved phone orders from customers using a point-of-sale
              computer system
            </li>
            <li>
              Worked alongside store managers to confirm orders and resolved
              issues
            </li>
          </ul>
          <p>
            <strong>Trainer (Nov 2023 - Aug 2024)</strong>
          </p>
          <ul>
            <li>Trained new hires in one-on-one hands-on training</li>
            <li>Evaluated trainees and confirmed training progression</li>
          </ul>
          <h3>CostQuest Associates (May 2025 - Present)</h3>
          <p>
            <strong>Developer Intern</strong>
          </p>
          <ul>
            <li>
              Created programs and applications for organizing and fetching data
              for large scale databases
            </li>
            <li>
              Created and monitored front-end web development, ensuring WCAG AA
              guidelines were met
            </li>
            <li>
              Helped to implement PayloadCMS into a preexisting
              E-Commerce-Platform, working with our marketing team to meet needs
            </li>
            <li>
              Worked with a team to develop a long-term compliance platform for
              a federal grant program
            </li>
          </ul>
          <h2>Vollunteering</h2>
          <h3>Stray Animal Adoption Program (Sep 2025 - Present)</h3>
          <p>
            <strong>Adoption Event Vollunteer</strong>
          </p>
          <ul>
            <li>
              Took care of the physical and emotional needs of dogs and cats up
              for adoption
            </li>
            <li>Helped promote animals to potential adopters</li>
          </ul>
        </div>
      </div>
    </>
  )
}
