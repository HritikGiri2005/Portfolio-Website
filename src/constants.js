// Skill Logos
import htmlLogo from './assets/Tech_Logo/html.png';
import cssLogo from './assets/Tech_Logo/css.png';
import javascriptLogo from './assets/Tech_Logo/javascript.png';
import reactjsLogo from './assets/Tech_Logo/reactjs.png';
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
import pillaiLogo from "./assets/Education_logo/PillaiLogo.jpg"
import khamkarLogo from "./assets/Education_logo/khamkar.PNG"
import BirlaLogo from "./assets/Education_logo/Bk Birla.webp"

// Project Section Logo's
import HarvestLogo from "./assets/work_logo/HarvestTrace.png"
import FaceLogo from "./assets/work_logo/FaceRecog.jpg";
import VeriFace from "./assets/work_logo/VeriFace.jpeg"




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
    company: "Prodigy infotech",
    date: "Jan 2024 - Feb 2024",
    desc: "Developed dynamic and scalable web applications using HTML, CSS, Boostrap & JavaScript, handling frontend. Collaborated with cross-functional teams to build responsive UI and optimize application performance.",
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
    date: "2022 - 2026",
    grade: "8.2 CGPA",
    desc: "I am Pursuing my Bachelor's of Technology (BTech) in Information Technology from Pillai HOC College, Rasayani - Panvel. During my time at PHCET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Computer Networks, Digital Forensics and Software Engineering. I am actively participated in various Hackathons, workshops and technical events, which enhance my skills and knowledge. My experience at Pillai HOC College has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor's of Technology in Information Technology - BTech in IT",
  },
  {
    id: 1,
    img: BirlaLogo,
    school: "B.K Birla College (Autonomous), Kalyan",
    date: "2021 - 2022",
    grade: "72.83%",
    desc: "I completed my Higher Secondary Certificate (HSC) with a specialization in Electronics from Bk Birla College, Kalyan. During my time at Bk Birla College, I delved into a diverse range of subjects that deepened my understanding of electronics and technology. From mastering the fundamentals of Electronic Circuits and Communication Systems to exploring advanced topics in Digital Electronics and Microprocessors, I gained valuable insights into the field of electronics. My education at Bk Birla College provided me with hands-on experience through projects that applied theoretical knowledge to practical applications, preparing me for a career in technology and innovation.",
    degree: "HSC - PCM with Electronics",
  },
  {
    id: 2,
    img: khamkarLogo,
    school: "ShriKrishna Khamkar Vidyalaya, Badlapur",
    date: "2019 - 2020",
    grade: "84%",
    desc: "I've passed my class 10th education from ShriKrishna Khamkar Vidyalaya, Badlapur, Maharashtra, under the SSC board, where I studied Mathematics, Physics, Chemistry & also Biology.",
    degree: "10th SSC board",
  },
];

export const projects = [

    {
    id: 0,
    title: "Harvest-Trace",
    description:
      "Harvest Trace is a full-stack MERN application that bridges the gap between farmers and consumers, offering a transparent and traceable agricultural marketplace. It uses QR-based verification, real-time geolocation maps, and secure role-based access to provide a seamless experience.",
      image: HarvestLogo,
    tags: ["React.js", "Bootstrap", "Axios", "Leaflet.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    github: "https://github.com/P-N-S-U/Harvest-Trace",
  },
  {
    id: 1,
    title: "Face Recognition Attendance System",
    description:
      "A Full-Stack Web Application that uses Face Recognition Technology to mark attendance for Employees and Saves the file in CSV format which we can download as an Excel Sheet.",
    image: FaceLogo,
    tags: ["HTML", "CSS", "JavaScript", "Python", "Django", "OpenCV", "Pandas"],
    github: "https://github.com/HritikGiri2005/face-recognition-attendance-system",
  },

  {
    id: 2,
    title: "VeriFace : Deepfake Detection System",
    description:
      "VeriFace is a machine learning-based project designed to detect whether an image is real or AI-generated. This web application utilizes a Convolutional Neural Network (CNN) model based on EfficientNet to classify images. The project is built using Django for the web framework and integrates an AI model that analyzes images and predicts their authenticity. ",
    image: VeriFace,
    tags: ["Django", "Python", "TensorFlow", "Keras", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
    github: "https://github.com/HritikGiri2005",
  },

];

