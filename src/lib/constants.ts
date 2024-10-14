import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/DevAlchamist',
  linkedin: 'https://www.linkedin.com/in/shubhanshu-nayak-9332562a4/',
  mail: 'mailto:devalchamist@gmail.com',
  instagram: 'https://www.instagram.com/irl_introvert/',
  // medium: 'https://ladvace.medium.com/',
  // discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Dev Alchamist',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Shubhanshu Nayak',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Tattoo Artist',
    institution: 'Tattoo Academy',
    link: 'https://www.instagram.com/tattoodcacademy/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    "company": "InfoTechEdge PVT. LTD",
    "location": "India",
    "link": "https://www.infotechedge.in/",
    "position": "Sr. Web Developer",
    "start": "September 2024",
    "end": "Present",
    "tasks": [
      "Comprehensive frontend development tasks and facilitated client communications",
      "Hosting React & Next.js applications in Cpanel & WHM servers including GoDaddy"
    ]
  },
  {
    "company": "CodeSculpt Solutions",
    "location": "India",
    "position": "Full Stack Developer",
    "link": "https://codesculpt.co.in/",
    "start": "2021",
    "end": "2022",
    "tasks": [
      "Ensured seamless user experiences through UI/UX improvements",
      "Collaborated with the backend team to integrate APIs",
      "Optimized application performance and debugging"
    ]
  },
  {
    "company": "Banao Technologies",
    "location": "India",
    "position": "Full Stack Developer",
    "start": "2023",
    "end": "Current",
    "link": "https://banao.tech/",
    "tasks": [
      "Backend development with DynamoDB, AWS Lambda, and Serverless for ProcurPal project",
      "Frontend development and client interactions for The Language Network (TLN) project",
      "Integration of AdminJS for route handling and admin dashboard development",
      "Development of a landing page maker for dynamic page creation"
    ]
  },
  {
    "company": "Freelance",
    "location": "Remote",
    "position": "Full Stack Developer",
    "start": "2022",
    "end": "2023",
    "tasks": [
      "Development of a landing page maker",
      "Built Google Event Manager for managing events",
      "Handled various frontend development tasks for different clients"
    ]
  }
]

