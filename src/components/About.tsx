import React from 'react'
import { SiTypescript, SiReact, SiFlutter, SiFirebase, SiSpringboot, SiDjango, SiMysql, SiDocker } from 'react-icons/si'
import { motion } from 'framer-motion'

const About:React.FC = () => {
  return (
        <div id="about" className='w-full h-screen text-slate-100 mb-80'>
                <motion.div
                 className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                   <div className='grid grid-cols-2'>
                         <div className=' sm:text-right pl-4 mb-10'>
                                <p className='text-7xl text-slate-200 font-bold'>Skills</p>
                                <p className='text-base text-slate-200 font-extralight tracking-widest'>technologies I know</p>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 text-slate-400 gap-8 px-4 items-start'>
                        <div className='sm:text-right text-2xl font-semibold mt-8'>
                        Here are a few latest technologies I've been working with recently:
                        </div>
                        <div className='flex flex-wrap gap-3 text-slate-50'>
                        {skillsData.map((skill, index) => (
                            <div
                            key={index}
                            className='flex flex-row items-center justify-center gap-2 bg-slate-800 rounded-full px-4 py-2 shadow-sm shadow-black'
                            >
                            {skill.icon}
                            <p>{skill.title}</p>
                            </div>
                        ))}
                        </div>

                    </div>
        
        </motion.div>
        </div>
  )
}

export default About

interface Skill {
    icon: React.ReactElement;
    title: string;
  }

  const skillsData: Skill[] = [
    { icon: <SiTypescript size={15} />, title: 'Typescript' },
    { icon: <SiReact size={15} />, title: 'React' },
    { icon: <SiFlutter size={15} />, title: 'Flutter' },
    { icon: <SiFirebase size={15} />, title: 'Firebase' },
    { icon: <SiSpringboot size={15} />, title: 'Springboot' },
    { icon: <SiDjango size={15} />, title: 'Django' },
    { icon: <SiMysql size={15} />, title: 'MySQL' },
    { icon: <SiDocker size={15} />, title: 'Docker' },
  ];