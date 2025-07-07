const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://alvintsa.github.io/',
  title: "Alvin's Portfolio",
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alvin',
  // role: 'Aspiring Software Engineer',
  description: `I'm currently a Master's Student in Computer Science at the University at Buffalo. 
  Along with my studies, I work with two professors, 
  conducting research in NLP, AI, and Software; each in their respective labs: 
  <a href="https://cse.buffalo.edu/cubelab/" target="_blank" rel="noopener noreferrer" style="color: #1e90ff; font-weight: bold;">
    Computational and Equity (cUBe) Lab,
  </a> and
  <a href="https://www.acsu.buffalo.edu/~cxjacobs/index/CaLiCo_Lab.html" target="_blank" rel="noopener noreferrer" style="color: #ff6347; font-weight: bold;">
    Computational Linguistics and Cognition (CaLiCo) Lab.
  </a> I also love learning and meeting new people!`,   
  resume: 'https://alvintsa.github.io/resume-page/alvin-tsang-resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/alvintsa/',
    github: 'https://github.com/alvintsa',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AlvinGPT',
    description:
      'A flexibile chatbot that combines Information Retrieval, SEO, NLP, and AI techniques to allow people to have an interactive Google-like search!',
    stack: ['Python', 'ReactJS', 'Google Cloud Platform'],
    sourceCode: 'https://github.com/alvintsa/AlvinGPT-public',
    // livePreview: 'https://github.com',
  },
  {
    name: 'clamp',
    description:
      'A Python package that simplifies clustering of LLM next-word predictions with an end-to-end pipeline for seamless analysis.',
    stack: ['Python', 'Pytorch', 'YAML'],
    sourceCode: 'https://github.com/calicolab/clamp',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Steins Gate Auctions',
    description:
      'A deployed full-stack e-commerce web application that is themed after the teamapos favorite anime. It incorporates various Web Development techniques such as TCP, IP, and HTTP protocols, authentication, security, and WebSockets.',
    stack: ['Python', 'JavaScript', 'HTML', 'CSS', 'Docker', 'MongoDB', 'Digital Ocean'],
    sourceCode: 'https://github.com/alvintsa/Steinsgateauctions-CSE312-Project',
    // livePreview: 'https://github.com',
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
