import React from 'react'
import { SiDjango, SiDocker, SiFirebase, SiFlutter, SiMysql, SiReact, SiSpringboot, SiTypescript} from 'react-icons/si'
import { darker_color } from '../App'

const Skills:React.FC = () => {
  return (
    <div id="skills" className={`${darker_color} w-full h-screen`}>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-denary'>
            <div>
              <p className='text-4xl font-bold inline border-b-4 border-quinary '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='grid sm:grid-cols-4 grid-cols-3 text-center text-slate-100 py-8 gap-5'>
                <div className='flex flex-col items-center justify-center shadow-md shadow-black bg-black/30 rounded-md hover:scale-110 duration-500  pt-4'>
                    <SiTypescript size={50}/>
                    <p className='my-4'>Typescript</p>
                </div>
                <div className='flex flex-col items-center justify-center shadow-md shadow-black bg-black/30 rounded-md hover:scale-110 duration-500  pt-4'>
                    <SiReact size={50}/>
                    <p className='my-4'>React</p>
                </div>
                <div className='flex flex-col items-center justify-center shadow-md shadow-black bg-black/30 rounded-md hover:scale-110 duration-500  pt-4'>
                    <SiFlutter size={50}/>
                    <p className='my-4'>Flutter</p>
                </div>
                <div className='flex flex-col items-center justify-center shadow-md shadow-black bg-black/30 rounded-md hover:scale-110 duration-500  pt-4'>
                    <SiFirebase size={50}/>
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='flex flex-col items-center justify-center shadow-md shadow-black bg-black/30 rounded-md hover:scale-110 duration-500  pt-4'>
                    <SiSpringboot size={50}/>
                    <p className='my-4'>Springboot</p>
                </div>
                <div className='flex flex-col items-center justify-center shadow-md shadow-black bg-black/30 rounded-md hover:scale-110 duration-500  pt-4'>
                    <SiDjango size={50}/>
                    <p className='my-4'>Django</p>
                </div>
                <div className='flex flex-col items-center justify-center shadow-md shadow-black bg-black/30 rounded-md hover:scale-110 duration-500  pt-4'>
                    <SiMysql size={50}/>
                    <p className='my-4'>MySQL</p>
                </div>
                <div className='flex flex-col items-center justify-center shadow-md shadow-black bg-black/30 rounded-md hover:scale-110 duration-500  pt-4'>
                    <SiDocker size={50}/>
                    <p className='my-4'>Docker</p>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Skills