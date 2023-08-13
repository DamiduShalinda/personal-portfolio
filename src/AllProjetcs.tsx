import React from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import { BsArrowUpLeft , BsArrowUpRight , BsGithub} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { projectsdata } from './data';
import { motion } from 'framer-motion';

const AllProjetcs: React.FC = () => {

  const variants = {
    hidden: { opacity: 0 , scale: 0.9 },
    visible: { opacity: 0.5 , scale: 1 },
    hover: { 
      scale: 1.3 , 
      opacity: 1,
      duration: 0.5,
    },
    tap: { scale: 0.9 },
  }

  return (
    <div className='w-full text-white snap-y snap-mandatory h-screen max-h-full '>
      <ScrollToTopButton/>
      <div className='fixed pt-40 pl-40'>
            <div className='items-start justify-center flex flex-row'>
              <motion.div
                initial={{ opacity: 0, x: -100  , scale: 1}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='border-4 '
              >
                <Link to='/'>
                  <BsArrowUpLeft size={100} />
                </Link>
              </motion.div>
              <p className='text-5xl pl-4'>All Projects</p>
            </div>
          </div>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='grid md:grid-cols-3'>
          <div></div>
          <div className='col-span-2 flex flex-col items-center justify-start gap-4'>
            {projectsdata.map((project, index) => (
                <div key={index} className='flex flex-row justify-between border w-[30rem] rounded-md border-slate-500 bg-slate-900 bg-opacity-50'>
                  <div className='flex flex-col p-5'>
                    <p className='text-2xl font-semibold mb-3'>{project.title}</p>
                    <p className='text-sm font-light mb-2'>{project.description}</p>
                    <div className='flex flex-wrap gap-2 my-2'>
                        {project.technologies.map((technology , index) => (
                         <div key={index} className='bg-slate-700 px-2 py-1 rounded-full text-xs'>
                            {technology}
                          </div>
                           ))}
                    </div>
                    <div className='flex flex-row gap-5 mt-4'>
                      <a href={project.githublink} target='_blank' rel="noreferrer">
                        <motion.div 
                          initial={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.1 , opacity: 1}}
                          whileTap={{ scale: 0.9 }}
                        className="flex flex-row items-center gap-2 border-2 border-slate-800 p-2 rounded-md hover:border-slate-700">
                          <BsGithub size={15}/>
                          <p className='text-xs'>Github</p>
                        </motion.div>
                      </a>
                      <a href={project.weblink} target='_blank' rel="noreferrer">
                        <motion.div 
                          initial={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.1 , opacity: 1}}
                          whileTap={{ scale: 0.9 }}
                        className="flex flex-row items-center gap-2 border-2 border-slate-800 p-2 rounded-md hover:border-slate-700">
                          <p className='text-xs'>Live View</p>
                          <BsArrowUpRight size={15}/>
                        </motion.div>
                      </a>
                    </div>
                  </div>
                    <div className='flex flex-col justify-evenly items-center p-5'>
                          <motion.div
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            whileTap="tap"
                          className=' p-2'>
                            <BsArrowUpRight size={50}/>
                          </motion.div>
                    </div>
                </div>
            ))
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjetcs;
