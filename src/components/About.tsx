import React from 'react'
import { SiDjango, SiDocker, SiFirebase, SiFlutter, SiJavascript, SiMysql, SiPython, SiReact, SiSpringboot, SiTypescript , SiNextdotjs, SiSpring, SiNetlify, SiAzuredevops} from 'react-icons/si'
import { SlScreenSmartphone } from 'react-icons/sl'
import { BiWorld } from 'react-icons/bi'
import { FaServer } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About:React.FC = () => {
  return (
        <motion.div 
            initial={{y:100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5}}
            exit={{y:-100, opacity:0}}
            id="about" 
            className='w-full h-screen text-slate-50'>
                <div className='max-w-[1000px] mx-auto sm:mx-48 px-8 flex flex-col justify-center h-full pb-10'>
                    <div><p className='text-7xl text-slate-300 font-bold flex flex-row items-end gap-5 mb-10'>SKILLS<p className='text-xl font-light text-teal-300'> & technologies</p></p></div>

                   <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
                    <div className='flex flex-col items-start gap-2 bg-slate-800 w-72 rounded-xl p-4'>
                        <BiWorld size={35}/>
                        <label className='text-xl  font-bold my-2'>Frontend Development</label>
                        <p className='pb-3 text-sm'>I can do a front end development using latest technoglogies like ReactJs and NextJs</p>
                        <div className='flex flex-row text-xl gap-3'>
                            <SiJavascript/><SiTypescript/><SiReact/><SiNextdotjs/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-2 bg-slate-800 w-72 rounded-xl p-4'>
                        <SlScreenSmartphone size={30}/>
                        <label className='text-xl  font-bold my-2'>Mobile App Development</label>
                        <p className='pb-3 text-sm'>I can create a mobile app using technologies like flutter and firebase</p>
                        <div className='flex flex-row text-xl gap-3'>
                            <SiFlutter/><SiFirebase/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-2 bg-slate-800 w-72 rounded-xl p-4'>
                        <FaServer size={30}/>
                        <label className='text-xl  font-bold my-2'>Backend Development</label>
                        <p className='pb-3 text-sm'>I can do a front end development using latest technoglogies like ReactJs and NextJs</p>
                        <div className='flex flex-row text-xl gap-3'>
                            <SiDjango/><SiSpringboot/><SiFirebase/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-2 bg-slate-800 w-72 rounded-xl p-4'>
                        <BiWorld size={30}/>
                        <label className='text-xl  font-bold my-2'>Containerization & Hosting</label>
                        <p className='pb-3 text-sm'>I can give a contanrize project that easy to host or I can do the hosting for you</p>
                        <div className='flex flex-row text-xl gap-3'>
                            <SiDocker/><SiNetlify/><SiAzuredevops/>
                        </div>
                    </div>
                    </div>
                    
        
        </div>
        </motion.div>
  )
}

export default About