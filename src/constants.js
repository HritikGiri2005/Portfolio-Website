// Skill Logos
import htmlLogo from './assets/Tech_Logo/html.png';
import cssLogo from './assets/Tech_Logo/css.png';
import javascriptLogo from './assets/Tech_Logo/javascript.png';
import reactjsLogo from './assets/Tech_Logo/reactjs.png';
import angularLogo from './assets/Tech_Logo/angular.png';
import reduxLogo from './assets/Tech_Logo/redux.png';
import tailwindcssLogo from './assets/Tech_Logo/tailwindcss.png';
import bootstrapLogo from './assets/Tech_Logo/bootstrap.png';
import mysqlLogo from './assets/Tech_Logo/mysql.png';
import mongodbLogo from './assets/Tech_Logo/mongodb.png';
import firebaseLogo from './assets/Tech_Logo/firebase.png';
import cLogo from './assets/Tech_Logo/c.png';
import cppLogo from './assets/Tech_Logo/cpp.png';
import pythonLogo from './assets/Tech_Logo/python.png';
import gitLogo from './assets/Tech_Logo/git.png';
import githubLogo from './assets/Tech_Logo/github.png';
import vscodeLogo from './assets/Tech_Logo/vscode.png';
import vercelLogo from './assets/Tech_Logo/vercel.png';
import djangoLogo from './assets/Tech_Logo/django.png';

// Experience Section Logo's
import prodigyLogo from "./assets/Company_logo/Prodigy.webp"

// Education Section Logo's
import pillaiLogo from "./assets/Education_logo/Pillai.webp"
import KhamkarLogo from "./assets/Education_logo/Khamkar.png"
import BirlaLogo from "./assets/Education_logo/Bk Birla.webp"

// Project Section Logo's



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Django', logo: djangoLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];



 export const experiences = [
    {
      id: 0,
      img: prodigyLogo,
      role: "Web developer Intern",
      company: "Prodigy infotect",
      date: "Jan 2024 - Feb 2024",
      desc: "Developed dynamic and scalable web applications using HTML, CSS, Boostrap & JavaScript, handling frontend. Collaborated with cross-functional teams to build responsive UI and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
      ],
    },
  ];


  export const education = [
    {
      id: 0,
      img: pillaiLogo,
      school: "Pillai HOC College (Autonomous), Rasayani - Panvel",
      date: "November 2022 - June 2026",
      grade: "8.00 CGPA",
      desc: "I am Pursuing my Master's degree (MCA) in Computer Applications from Pillai HOC College, Rasayani - Panvel. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Pillai HOC College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor's of Technology in Information Technology - BTech in IT",
    },
    {
      id: 1,
      img: BirlaLogo,
      school: "B.K Birla College (Autonomous), Kalyan",
      date: "April 2021 - March 2022",
      grade: "72.83%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "HSC - PCM with Electronics",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "ShriKrishna Khamkar Vidyalaya, Badlapur",
      date: "April 2019 - March 2020",
      grade: "78%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
  ];


   export const projects = [
    
  ];  