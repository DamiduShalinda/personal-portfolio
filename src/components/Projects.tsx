import React from 'react';
import { motion } from 'framer-motion';
import { BiLogoGithub, BiWorld } from 'react-icons/bi';
import { projectsdata } from '../data';


const Projects: React.FC = () => {
  return (
    <div id="projects" className="w-full ">
                      <motion.div
                 className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                   <div className='grid grid-cols-2 gap-5'>
                         <div className=' sm:text-right pl-4 mb-10'>
                                <p className='text-7xl text-slate-200 font-bold mb-2'>Projects</p>
                                <p className='text-base text-slate-200 font-extralight tracking-widest'>several projects I've created</p>
                                <p className='text-base text-slate-200 font-extralight tracking-widest'>to see all</p>
                        </div>
                    </div>
                  <div className='flex flex-col gap-10' >
                    {projectsdata.map((project, index) => (
                        <motion.div 
                        initial={{ scale: 0.9 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ scale: 1}}
                        exit={{ opacity: 0 }}
                        className={`flex  ${index %2 == 0 ? 'flex-row' : 'flex-row-reverse'} gap-10  bg-slate-800 rounded-lg`} key={index}>
                            <motion.img 
                            initial={{ scale: 0.9  , x : -50 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ scale: 1 , x:0 }}
                            src={project.imagepath} alt={project.title} className='w-1/2 rounded-lg shadow-lg' />
                            <div className={`flex flex-col justify-center ${index % 2 == 0 ? 'items-start' : 'items-end'} p-8`}>
                              <p className='text-2xl text-slate-200 font-bold'>{project.title}</p>
                              <p className='text-base text-slate-200 font-extralight'>{project.description}</p>
                              <div className={`flex gap-4 my-5`}>
                                <a href={project.githublink} target='_blank' rel='noreferrer'>
                                  <BiLogoGithub size={30} className='text-slate-200 hover:text-slate-100' />
                                </a>
                                <a href={project.weblink} target='_blank' rel='noreferrer'>
                                  <BiWorld size={30} className='text-slate-200 hover:text-slate-100' />
                                </a>
                              </div>
                              <div className='flex flex-row items-center justify-center gap-4'>
                                  {project.technologies.map((tech, index) => (
                                    <p className='text-slate-200 font-extralight text-base' key={index}>{tech}</p>
                                  ))}

                            </div>
                          </div>
                          </motion.div>
                      )
                    )
                    }
                  </div>
        
        </motion.div>
      
    </div>
  );
};

export default Projects;
