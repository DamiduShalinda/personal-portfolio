import loanmanagment from '../assets/loanmanagment.png'
import placeholder from '../assets/placeholder.png'

type projectdatatype = {
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
        title: "loan Manamgment System",
        description: "a mobile app and web app for loan managment system",
        technologies: ["React", "Django", "Flutter" , "MySQL" ],
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
