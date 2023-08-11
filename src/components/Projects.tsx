import React from 'react'
import { BiLogoGithub , BiWorld} from 'react-icons/bi'
import { Link} from 'react-scroll'
import { projectsdata } from '../data'

const Projects:React.FC = () => {
  return (
    <div id="projects" className='w-full  bg-slate-900'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-slate-200 snap-start'>
        <div>
              <p className='text-4xl font-bold inline border-b-4 border-quinary '>
              <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                Projects
                </Link>
              </p>
              <p className='py-4'>These are the Projects I've created</p>
            </div>
        <div className="flex flex-col mx-auto">
        {/* Grid item */}
        { projectsdata.map((project , index) => {
            return (
                <div key={index} className="flex flex-col md:flex-row gap-10 py-4 items-start hover:scale-100 scale-95 duration-300">
                    <div className="flex flex-col md:w-1/3">
                        <img src={project.imagepath} alt={project.title} className="rounded-lg"/>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                        <p className="text-2xl font-bold mb-3">{project.title}</p>
                        <p className="text-md">{project.description}</p>
                        <div className="flex flex-row gap-4 py-4">
                            <a href={project.githublink} target="_blank" className="flex flex-row gap-2 items-center hover:text-white">
                                <BiLogoGithub/>
                                Github
                            </a>
                            <a href={project.weblink} target="_blank" className="flex flex-row gap-2 items-center">
                                <BiWorld/>
                                <p>Live Link</p>
                            </a>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    </div> 
    </div>
  )
}

export default Projects