import React from 'react'
import { SiDjango, SiDocker, SiFirebase, SiFlutter, SiMysql, SiReact, SiSpringboot, SiTypescript} from 'react-icons/si'

const Skills:React.FC = () => {
  return (
<div id="skills" className={`w-full h-screen`}>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-denary'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-quinary'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with.</p>
        </div>
        <div className='flex flex-wrap gap-5 text-slate-50'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className='flex flex-row items-center justify-center gap-2 bg-slate-600 rounded-xl px-3'
            >
              {skill.icon}
              <p className='my-4'>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills




interface Skill {
    icon: React.ReactElement;
    title: string;
  }
  
  const skillsData: Skill[] = [
    { icon: <SiTypescript size={20} />, title: 'Typescript' },
    { icon: <SiReact size={20} />, title: 'React' },
    { icon: <SiFlutter size={20} />, title: 'Flutter' },
    { icon: <SiFirebase size={20} />, title: 'Firebase' },
    { icon: <SiSpringboot size={20} />, title: 'Springboot' },
    { icon: <SiDjango size={20} />, title: 'Django' },
    { icon: <SiMysql size={20} />, title: 'MySQL' },
    { icon: <SiDocker size={20} />, title: 'Docker' },
  ];