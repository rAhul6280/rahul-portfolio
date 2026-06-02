import React from 'react'
import { FiGithub } from 'react-icons/fi'

function Projects({projectThumbnail,projectTitle,projectDescription,projectLink,sourceCodeLink}) {
  return (

    <div className='flex  border font-outfit border-blue-500 box-border text-sm rounded-lg flex-col shadow shadow-gray-700  py-4 px-4' > 
    <h2 className='text-xl px-2 text-blue-500 font-bold mb-1'>{projectTitle}</h2>
      <div className='flex items-center  mb-2'>
      {/* link div */}
      <a 
      className=' border border-gray-600 bg-transparent hover:bg-amber-400 hover:text-slate-950 rounded-full px-4 py-1'
      href={ `${projectLink}`} target="_blank" rel="noopener noreferrer">
       🔗Visit Project 
      </a>
      <a 
      className=' ml-2 border border-gray-600 bg-transparent hover:bg-white hover:text-slate-950 rounded-full px-4 py-1 flex items-center'
      href={ `${sourceCodeLink}`} target="_blank" rel="noopener noreferrer">
        <FiGithub/> Source Code
      </a>
      </div>
      <div className='flex flex-col md:flex-row gap-4 items-center  rounded-lg p-2 '>
        
          {/* img div */}
          <img className='w-60 md:w-40 h-auto  object-cover rounded-md' src={projectThumbnail} alt={`${projectTitle} thumbnail`} />
        
            
          {/* description div */}
          <p className='text-sm'>{projectDescription}</p>
        
    </div>
       
      </div>
   
  )
}

export default Projects