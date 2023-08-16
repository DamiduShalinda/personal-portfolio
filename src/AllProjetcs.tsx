import React, { useEffect, useState } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import { BsArrowUpLeft , BsArrowUpRight , BsGithub} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Project} from './data';
import { motion } from 'framer-motion';
import { db } from './firebase-config';
import { getDocs , collection} from '@firebase/firestore';

const AllProjetcs: React.FC = () => {

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const projectsRef = collection(db, "allprojects")

  useEffect(() => {
    const getProjects = async () => {
        const doc_refs = await getDocs(projectsRef)
        if (doc_refs.empty) {
          console.log("No projects found")
        } else {
          const projects : Project = doc_refs.docs.map(doc => ({...doc.data(), id: doc.id}))
          setProjects(projects)
        }
    }
    getProjects()
  }, [])

  useEffect(() => {
    if (projects.length > 0) {
      setLoading(false)
      }
    } , [projects])


  return (
    <>
    {loading ? 
    <div className='w-full h-screen text-white'>
      Loading...
    </div> :
    <div className='w-full text-white snap-y snap-mandatory md:h-full max-h-full '>
    <ScrollToTopButton/>
    <div className='md:fixed md:pt-40 md:pl-40 pt-10 pl-10'>
          <div className='md:items-start items-center justify-center flex flex-row gap-2 md:gap-4 mb-5'>
            <motion.div
              initial={{ opacity: 0, x: -100  , scale: 1}}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='border-4'
            >
              <div className='hidden md:flex'>
                <Link to='/'>
                  <BsArrowUpLeft size={100} />
                </Link>
              </div>
              <div className='md:hidden flex'>
                <Link to='/'>
                  <BsArrowUpLeft size={50} />
                </Link>
              </div>
            </motion.div>
            <p className='md:text-5xl text-3xl pl-4'>All Projects</p>
          </div>
        </div>
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <div className='grid md:grid-cols-3'>
        <div></div>
        <div className='col-span-2 flex flex-col items-center justify-start gap-4'>
          {projects.map((project, index) => (
              <div key={index} className='flex flex-row justify-start border md:w-[30rem] w-[23rem] rounded-md border-slate-500 bg-slate-900 bg-opacity-50'>
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
              </div>
          ))
            }
        </div>
      </div>
    </div>
  </div>
      }
    </>
  );
};

export default AllProjetcs;
