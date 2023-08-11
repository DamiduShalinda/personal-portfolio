import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home:React.FC = () => (
    <div id="home" className=' flex items-center justify-center w-full h-screen bg-dark3'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
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
                <Link to='projects' smooth={true} duration={500}>
                <button className='flex flex-row items-center text-slate-200 text-lg gap-3 border-2 border-slate-200 p-3 mt-2 hover:bg-slate-200 hover:text-slate-950 group'>
                    View Projects
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineArrowRightAlt size={30}/>
                    </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
)

export default Home