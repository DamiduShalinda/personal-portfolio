import React from 'react';
import { motion } from 'framer-motion';
import { BiLogoGithub, BiWorld } from 'react-icons/bi';
import { BsArrowUpRight } from 'react-icons/bs'
import { projectsdata } from '../data';
import { Link } from 'react-router-dom';


const Projects: React.FC = () => {
  return (
    <div id="projects" className="w-full md:h-screen h-full">
                <div
                 className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
                   <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                         <div className=' sm:text-right pl-4 mb-5'>
                                <p className='text-7xl text-slate-200 font-bold mb-2'>Projects</p>
                                <p className='text-base text-slate-200 font-extralight tracking-widest'>several projects I've created</p>
                        </div>
                    </div>
                  <div
                  className='flex md:flex-row flex-col gap-10 text-slate-100 items-center justify-center' >
                    {projectsdata.map((project, index) => (
                        <motion.div key={index}
                        initial = {{ scale : 0.95}}
                        whileHover={{ scale : 1 }}
                          className='group border border-slate-600 h-96 w-80 flex flex-col items-start justify-start py-10 px-4 rounded-lg hover:bg-slate-50 content-div'
                          style={{
                            backgroundImage: `url(${project.imagepath})`,
                            backgroundClip: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right center', 
                            backgroundSize: 'cover',
                          }}
                          >
                          <div className='hidden group-hover:flex flex-col'>
                            <div className='text-xl font-semibold  text-left h-20'>{project.title}</div>
                            <div className='font-thin mb-4 h-20'>{project.description}</div>
                            <div className='h-24'>
                              <div className='flex flex-wrap gap-2'>
                                {project.technologies.map((technology , index) => (
                                  <div key={index} className='bg-slate-700 px-2 py-1 rounded-full text-xs'>
                                    {technology}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className='flex flex-row justify-evenly items-start mx-auto gap-20 mb-4'>
                              <a href={project.githublink} target='_blank'><BiLogoGithub size={30}/></a>
                              <a href={project.weblink} target='_blank'><BiWorld size={30}/></a>
                            </div>
                          </div>
                        </motion.div>
                      )
                    )
                    }
                  </div>
                    <Link to='/allprojects'>
                      <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className='mx-auto mt-10 w-40 flex flex-row items-center justify-center text-slate-100 text-lg gap-3 border-2 border-slate-100 p-2 hover:bg-slate-100 hover:text-slate-900 group'>
                          See More
                          <span className='group-hover:rotate-90 duration-300'>
                              <BsArrowUpRight size={25}/>
                          </span>
                      </motion.button>
                    </Link>
        
        </div>
      
    </div>
  );
};

export default Projects;
