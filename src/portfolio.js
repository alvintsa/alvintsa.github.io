const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: "Alvin's Portfolio",
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alvin',
  // role: 'Aspiring Software Engineer',
  description: `I'm currently a Master's Student in Computer Science at the University at Buffalo, 
  where I also received my Bachelor's in Computer Science with Minors in Japanese, Mathematics, and Sociology 
  in 2023. Along with my current studies, I work with two professors, 
  conducting research in NLP, AI, and Software; each in their respective labs: Computational Linguistics 
  and Cognition (CaLiCo) Lab, and Computational and Equity (cUBe) Lab.`,
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/alvintsa/',
    github: 'https://github.com/alvintsa',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Making Friends!", "Python", "JavaScript", "HTML", "CSS", "Scala", "C#", "Docker", "ReactJS", "NodeJS", "SQL", "MongoDB", "Digital Ocean"
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'alvinc2013@gmail.com',
}

export { header, about, projects, skills, contact }
