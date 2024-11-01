import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowRight, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineMail ,  MdPhoneForwarded } from 'react-icons/md'
import { FaFilePdf} from 'react-icons/fa'

const Skills:React.FC = () => {
  return (
    <div id="contact" className='w-full h-screen text-slate-100'>
    <motion.div
     className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
       <div className='grid md:grid-cols-2 gap-10'>
             <div className=' sm:text-right pl-4'>
                    <p className='text-7xl text-slate-200 font-bold'>Contact</p>
                    <p className='text-base text-slate-200 font-extralight tracking-widest'>me</p>
                      <div className='items-end justify-evenly gap-5 mt-10 mb-4 flex flex-wrap md:hidden'>
                      <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                              <a href="https://wa.me/+94754906770">
                                <button className='border p-4 hover:bg-slate-100 hover:text-slate-900'><BsWhatsapp size={15}/></button></a></motion.div>
                      <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                              <a href="mailto:shalindadamidu@gmail.com">
                                <button className='border p-4 hover:bg-slate-100 hover:text-slate-900'><MdOutlineMail size={15}/></button></a></motion.div>
                      <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                              <a href="Tel: 0754906770">
                                <button className='border p-4 hover:bg-slate-100 hover:text-slate-900'><MdPhoneForwarded size={15}/></button></a></motion.div>
                      </div>
                    <div className='hidden md:flex md:flex-col'>
                      {/* md screen icon */}
                      <div className='md:flex md:flex-wrap items-end justify-end gap-5 mt-10 mb-7'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                              <a href="https://wa.me/+94754906770">
                                <button className='border p-5 hover:bg-slate-100 hover:text-slate-900'><BsWhatsapp size={30}/></button></a></motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                              <a href="mailto:shalindadamidu@gmail.com">
                                <button className='border p-5 hover:bg-slate-100 hover:text-slate-900'><MdOutlineMail size={30}/></button></a></motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                              <a href="Tel: 0754906770">
                                <button className='border p-5 hover:bg-slate-100 hover:text-slate-900'><MdPhoneForwarded size={30}/></button></a></motion.div>
                      </div>
                      <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                              <a href="Tel: 0754906770">
                                <button className='border p-5 hover:bg-slate-100 hover:text-slate-900'><FaFilePdf size={30}/></button></a></motion.div>
                    </div>
            </div>
            <div className='flex flex-col gap-5 items-end'>
              <textarea className='bg-slate-900 text-slate-50 w-full h-48 rounded-lg p-4' placeholder='send me a message...'></textarea>
              <div>
              <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className='mx-auto md:w-40 flex flex-row items-center justify-center text-slate-100 text-lg gap-3 border-2 border-slate-100 p-2 hover:bg-slate-100 hover:text-slate-900 group'>
                          <p className='hidden md:flex'>Send</p>
                          <span className='group-hover:rotate-90 duration-300'>
                              <BsArrowRight size={25}/>
                          </span>
                      </motion.button>
              </div>
            </div>
        </div>

</motion.div>
</div>
  )
}

export default Skills

