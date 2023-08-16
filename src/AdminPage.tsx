import React from 'react'
import LoginFields from './components/LoginFields'
import { motion } from 'framer-motion'
import { addDoc , collection } from '@firebase/firestore'
import { db } from './firebase-config'


type userDetails = {
    username: string,
    password: string
}

type projectDetails = {
    title: string,
    description: string,
    technologies: string[],
    githublink: string,
    weblink: string
}

const AdminPage:React.FC = () => {

    const [loggedIn, setLoggedIn] = React.useState(false)
    const [ title , setTitle ] = React.useState('')
    const [ description , setDescription ] = React.useState('')
    const [ technologiesstring , setTechnologiesstring ] = React.useState<string[]>([])
    const [ githublink , setGithublink ] = React.useState('')
    const [ weblink , setWebLink ] = React.useState('')

    const projectCollection = collection( db , 'allprojects')

    const addProjects = async (project : projectDetails) => {
        await addDoc(projectCollection, project)
        setTitle('')
        setDescription('')
        setTechnologiesstring([])
        setGithublink('')
        setWebLink('')
        alert('Project added successfully')
    }
        

    const handleSubmit = (user: userDetails) => {

        if(user.username === 'janaka' && user.password === 'Jana1234'){
            setLoggedIn(true)
        } else
            alert('Incorrect username or password')

    }
   
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const project: projectDetails = {
            title,
            description,
            technologies: technologiesstring,
            githublink,
            weblink
        }

        addProjects(project)
    }



  return (
    <>
    {!loggedIn ? <div className='w-full h-screen text-slate-100'><LoginFields onSubmit={handleSubmit}/></div> :
        <div className='w-full h-screen text-slate-100'>
            <h1 className='text-3xl text-center mb-4'>Admin Page</h1>
            <form onSubmit={handleFormSubmit}>
                <div className='flex flex-col items-center justify-center gap-4 text-slate-900'>
                    <input 
                        type='text'
                        className='w-1/3 p-2 my-2 border-2 border-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-100' 
                        placeholder='Enter Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className='w-1/3 p-2 my-2 border-2 border-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-100'
                        placeholder='Enter Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type='text'
                        className='w-1/3 p-2 my-2 border-2 border-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-100'
                        placeholder='Enter Github Link'
                        value={githublink}
                        onChange={(e) => setGithublink(e.target.value)}
                    />
                    <input
                        type='text'
                        className='w-1/3 p-2 my-2 border-2 border-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-100'
                        placeholder='Enter Web Link'
                        value={weblink}
                        onChange={(e) => setWebLink(e.target.value)}
                    />
                    <input
                        type='text'
                        className='w-1/3 p-2 my-2 border-2 border-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-100'
                        placeholder='Enter Technologies'
                        value={technologiesstring}
                        onChange={(e) => {
                            const inputText = e.target.value;
                            const technologiesArray = inputText.split(',').map(tech => tech.trim());
                            setTechnologiesstring(technologiesArray);
                        }}
                    />
                    
                    <motion.button
                            type='submit'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='mx-auto mt-10 w-40 flex flex-row items-center justify-center text-slate-100 text-lg gap-3 border-2 border-slate-100 p-2 hover:bg-slate-100 hover:text-slate-900 group'>
                          Add Project
                      </motion.button>
                </div>
            </form>
        </div>
    }</>
    
  )
}

export default AdminPage