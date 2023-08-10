import React from 'react'
import loanmanagment from '../../assets/loanmanagment.png'
import { BiLogoGithub , BiWorld} from 'react-icons/bi'

const Projects:React.FC = () => {
  return (
    <div id="projects" className='w-full md:h-screen bg-primary'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-denary'>
        <div>
              <p className='text-4xl font-bold inline border-b-4 border-quinary '>Projects</p>
              <p className='py-4'>These are the Projects I've created</p>
            </div>
        <div className="grid md:grid-cols-2 items-center gap-4 ">
        {/* Grid item */}
            <div style={{ backgroundImage: `url(${loanmanagment})` }}
                 className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <h1 className="text-xl font-bold text-white">Loan Managment System</h1>
                    <div className="flex justify-center gap-3 py-4">
                        <button className="bg-white text-black px-4 py-2 rounded-md flex flex-row items-center gap-3">
                            <BiWorld size={25}/>
                            View Site
                            </button>
                        <button className="bg-white text-black px-4 py-2 rounded-md flex flex-row items-center gap-3">
                            View Code
                            <BiLogoGithub  size={25}/>
                            </button>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${loanmanagment})` }}
                 className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <h1 className="text-xl font-bold text-white">Loan Managment System</h1>
                    <div className="flex justify-center gap-3 py-4">
                        <button className="bg-white text-black px-4 py-2 rounded-md flex flex-row items-center gap-3">
                            <BiWorld size={25}/>
                            View Site
                            </button>
                        <button className="bg-white text-black px-4 py-2 rounded-md flex flex-row items-center gap-3">
                            View Code
                            <BiLogoGithub size={25}/>
                            </button>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${loanmanagment})` }}
                 className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <h1 className="text-xl font-bold text-white">Loan Managment System</h1>
                    <div className="flex justify-center gap-3 py-4">
                        <button className="bg-white text-black px-4 py-2 rounded-md flex flex-row items-center gap-3">
                            <BiWorld size={25}/>
                            View Site
                            </button>
                        <button className="bg-white text-black px-4 py-2 rounded-md flex flex-row items-center gap-3">
                            View Code
                            <BiLogoGithub size={25}/>
                            </button>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${loanmanagment})` }}
                 className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <h1 className="text-xl font-bold text-white">Loan Managment System</h1>
                    <div className="flex justify-center gap-3 py-4">
                        <button className="bg-white text-black px-4 py-2 rounded-md flex flex-row items-center gap-3">
                            <BiWorld size={25}/>
                            View Site
                            </button>
                        <button className="bg-white text-black px-4 py-2 rounded-md flex flex-row items-center gap-3">
                            View Code
                            <BiLogoGithub size={25}/>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Projects