import React from 'react'

const About:React.FC = () => {
  return (
    <section id='about'>
        <div id="about" className='w-full h-screen bg-slate-900'>
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                   <div className='grid grid-cols-2'>
                         <div className=' sm:text-right pb-8 pl-4'>
                                <p className='text-4xl text-denary font-bold border-b-4 inline  border-quinary'>About</p>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 text-septenary gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>
                                I'm Damidu, nice to meet you. Please Take a look around and get to know me.
                            </p>
                        </div>
                        <div>
                        <p className='text-lg text-denary'>
                            I am passionate about building excellent software that improves
                            the lives of those around me. I specialize in creating software
                            for clients ranging from individuals and small-businesses all the
                            way to large enterprise corporations. What would you do if you had
                            a software expert available at your fingertips?</p>
                        </div>
                    </div>
        
        </div>
        </div>
    </section>
  )
}

export default About