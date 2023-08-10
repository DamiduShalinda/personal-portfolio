import React from 'react'

const Footer:React.FC = () => {
  return (
    <div className='w-full bg-primary'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full text-denary gap-4'>
            <hr className='w-40 border-2 border-denary mt-5'/>
            <p>Find an issue with this page? 
                <a href="https://github.com/DamiduShalinda/personal-portfolio" className='text-violet-400 ml-3'>Fix it on GitHub</a>
                </p>
            <p>Need help?
                <a href="mailto:shalindadamidu@gmail.com" className='text-violet-400 ml-3'>shalindadamidu@gmail.com</a>
                </p>
            <p className='text-xs pb-5'>Copyright © 2023 Damidu Shalinda</p>

        </div>
    </div>
  )
}

export default Footer