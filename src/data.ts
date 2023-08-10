import loanmanagment from '../assets/loanmanagment.png'

type projectdatatype = {
    id: number;
    title: string;
    technologies: string[];
    githublink: string;
    weblink?: string;
    imagepath: string;
}

export const projectsdata: projectdatatype[] = [
    {
        id: 1,
        title: "loan Manamgment System",
        technologies: ["React", "Django", "Flutter" , "MySQL" ],
        githublink: "https://github.com/DamiduShalinda/loanManagmentSystem",
        weblink: "",
        imagepath : loanmanagment 
    },
    
]
