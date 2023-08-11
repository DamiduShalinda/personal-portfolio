import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Home:React.FC = () => {

    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }

    return (
        <motion.div
            initial={{y:100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5}}
            exit={{y:-100, opacity:0}}
            id="home" 
            className=' flex  justify-center w-full h-screen '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto sm:ml-48 px-8 flex flex-col justify-center'>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col items-start w-[738px]'>
                <p className='text-slate-400 text-md'>Hi, my name is,</p>
                <h1 className='text-4xl sm:text-7xl text-slate-50 font-bold'>
                    Damidu Shalinda
                </h1>
                <h1 className='text-4xl sm:text-6xl text-slate-500 font-bold mt-2'>
                    A Front End Developer
                </h1>
                <p className='max-w-[700px] text-lg text-slate-300 py-4'>
                    I’m a full-stack developer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I’m focused on
                    building responsive full-stack web applications.
                </p>
                <div className='z-10'>
                    <Link to='/projects'>
                    <motion.button 
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                        className='flex flex-row items-center text-slate-200 text-lg gap-3 border-2 border-slate-200 p-3 mt-2 hover:bg-slate-200 hover:text-slate-950 group mb-28'>
                        View Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineArrowRightAlt size={30}/>
                        </span>
                    </motion.button>
                    </Link>
                </div>
                </div>
            </div>
                
            </div>
        </motion.div>
    )
}

export default Home