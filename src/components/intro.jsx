import React from 'react'
import {FaGithub,FaEnvelope } from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'

// git@github.com:rAhul6280/rahul-portfolio.git
function Intro() {
  return (
    <div className='font-poppins  flex border border-blue-600 flex-col 
    rounded-lg shadow-md shadow-blue-600/40
    gap-4  justify-center   px-8  py-8'>
     <h1 className='md:text-7xl text-5xl font-bold leading-tight text-shadow-md text-shadow-blue-600/40 text-blue-600'>
      Learning by <span className='md:tracking-wider'>Building</span>
     </h1>
     <p className='text-xl'>Hello, my name is <span className='font-petit-formal-script text-blue-600 text-2xl text-shadow-blue-600/50 text-shadow-sm'>  Rahul</span></p>
     <div className='flex gap-4 mt-4'>
      <a href="https://github.com/rAhul6280" target="_blank"  className='mr-4'>
      <FaGithub size={35} className='text-2xl text-blue-600 transform hover:-translate-y-0.5 hover:text-blue-400 transition-all duration-200 ' />
      </a>

      <a href="https://x.com/rAhul_6280" target="_blank"  className='mr-4'>
        <FaXTwitter size={35} className='text-2xl text-blue-600 transform hover:-translate-y-0.5 hover:text-blue-400 transition-all duration-200 ' />
      </a>

      <a href="mailto:rrahul62808@gmail.com" target="_blank"  className='mr-4'>
        <FaEnvelope size={35} className='text-2xl text-blue-600 transform hover:-translate-y-0.5 hover:text-blue-400 transition-all duration-200 ' />
      </a>

    </div>
    </div>
  )
}

export default Intro