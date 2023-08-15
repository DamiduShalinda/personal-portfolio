import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Home:React.FC = () => {

    
    return (
        <div id="home" className=' flex items-center justify-center w-full h-screen cursor-default'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-slate-100 text-md'>Hi, my name is</p>
                <motion.h1 
                    initial={{ scale: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1.2 }}
                    className='text-4xl sm:text-7xl text-slate-50 font-bold ml-5 md:ml-0'>
                    Damidu Shalinda
                </motion.h1>
                {/* <Name/> */}
                <h1 className='text-4xl sm:text-6xl text-slate-400 font-bold'>
                    A Web Developer
                </h1>
                <p className='max-w-[700px] text-lg text-slate-500 py-4'>
                    I’m a full-stack developer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I’m focused on
                    building responsive full-stack web applications.
                </p>
                <div>
                    <Link to='projects' smooth={true} duration={500}>
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='flex flex-row items-center text-slate-100 text-lg gap-3 border-2 border-slate-100 p-3 mt-2 hover:bg-slate-100 hover:text-slate-900 group'>
                        View Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineArrowRightAlt size={30}/>
                        </span>
                    </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Home