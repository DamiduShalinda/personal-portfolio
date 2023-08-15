import loanmanagment from '../assets/loanmanagment.png'
import placeholder from '../assets/placeholder.png'
import { SiTypescript, SiReact, SiFlutter, SiFirebase, SiSpringboot, SiDjango, SiMysql, SiDocker, SiJavascript , SiDart } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export type projectdatatype = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githublink: string;
    weblink?: string;
    imagepath: string;
}



export const projectsdata: projectdatatype[] = [
    {
        id: 1,
        title: "Loan Manamgment System",
        description: "a mobile app and web app for loan managment system",
        technologies: ["Typescript","React", "Django", "Flutter" , "MySQL" ],
        githublink: "https://github.com/DamiduShalinda/loanManagmentSystem",
        weblink: "",
        imagepath : loanmanagment 
    },
    {
        id: 2,
        title: "Expense tracking app",
        description: "a mobile app for tracking daily expenses",
        technologies: ["Flutter"],
        githublink: "https://github.com/DamiduShalinda/expense_tracking_app.git",
        weblink: "",
        imagepath : placeholder 
    },
    {
        id: 3,
        title: "Inventory Managment System",
        description: "an inventory managment system for a small business",
        technologies: ["HTML", "CSS", "PHP" , "MySQL" ],
        githublink: "https://github.com/DamiduShalinda/Grocery-Strore-Web.git",
        weblink: "",
        imagepath : placeholder 
    }
    
]

interface Skill {
    languages: label[];
    frameworks: label[];
  }

  interface label {
    icon: React.ReactElement;
    title: string;
  }

export  const skillsData: Skill = 
    {
        languages: [
            { icon: <SiTypescript size={15} />, title: 'Typescript' },
            { icon: <SiJavascript size={15} />, title: 'Javascript' },
            { icon: <SiDart size={15} />, title: 'Dart' },
            { icon: <FaJava size={15} />, title: 'Java' },
        ] ,
        frameworks: [
            { icon: <SiReact size={15} />, title: 'React' },
            { icon: <SiFlutter size={15} />, title: 'Flutter' },
            { icon: <SiFirebase size={15} />, title: 'Firebase' },
            { icon: <SiDjango size={15} />, title: 'Django' },
            { icon: <SiSpringboot size={15} />, title: 'Springboot' },
            { icon: <SiMysql size={15} />, title: 'MySQL' },
            { icon: <SiDocker size={15} />, title: 'Docker' },
        ]
    }


  export  interface Project {
        id: string,
        title: string,
        description: string,
        githublink: string,
        weblink: string,
        technologies: string[]
      }