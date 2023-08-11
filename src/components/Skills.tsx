import React from 'react'
import { SiMinutemailer , SiGithub, SiLinkedin , } from 'react-icons/si'

const Skills:React.FC = () => {
  return (
    <div id="skills" className={` w-full h-screen`}>
            {/* container */}
            <div className='max-w-[1000px] mx-auto md:ml-48 px-8 flex flex-col justify-center h-full text-slate-50'>
            <div className='grid md:grid-cols-2 '>
            <div className='flex flex-col items-start'>
              <p className='text-7xl font-bold  border-quinary '>Contact Me</p>
              <p className='py-4 font-light text-xl'>Send Me a message</p>
            </div>
            <div className='flex flex-col gap-4'>
                <a href='mailto:shalindadamidu@gmail.com' target="_blank" className='border border-slate-100 flex flex-row p-3 hover:bg-emerald-900  items-center justify-center gap-10 rounded-sm'>
                    <SiMinutemailer size={30}/>
                    <p className='text-2xl font-semibold'> Send Me a Email</p>
               </a>
                <a href='https://github.com/DamiduShalinda' target="_blank" className='border border-slate-100 flex flex-row p-3 hover:bg-emerald-900  items-center justify-center gap-10 rounded-sm'>
                    <SiGithub size={30}/>
                    <p className='text-2xl font-semibold'> Follow Up on github</p>
               </a>
                <a href='https://www.linkedin.com/in/damidushalinda/' target="_blank" className='border border-slate-100 flex flex-row p-3 hover:bg-emerald-900  items-center justify-center gap-10 rounded-sm'>
                    <SiLinkedin size={30}/>
                    <p className='text-2xl font-semibold'> Follow Up on linkedIn</p>
               </a>
            </div>
            </div>
            
            </div>
    </div>
  )
}

export default Skills