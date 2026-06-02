import React from 'react'

export default function Skill() {

  const frontEnd=['ReactJS','JavaScript','Tailwindcss','HTML','CSS'];
  const backEnd=['NodeJS','ExpressJS','MongooseJS','MongoDB'];
  const tools=['Git','GitHub','VSCode','Postman'];
  return (
    <div className='font-poppins  flex border border-blue-600 flex-col 
    rounded-lg shadow-md shadow-blue-600/40
    gap-4  justify-center   px-8 py-8'>
      <h2 className='font-outfit text-4xl text-blue-500 text-shadow-md font-bold text-shadow-blue-600/40'>Tech Stack</h2>
      <div>
        <h3 className='font-outfit text-xl font-semibold text-shadow-sm text-shadow-white/50'>Frontend</h3>
        <ul className='list-disc flex  gap-2 flex-wrap list-inside'>
          {frontEnd.map((skill, index) => (
            <li key={index} className='text-gray-700'>{skill}</li>
          ))}
        </ul>
     
      </div>
      <div>
        <h3 className='font-outfit text-xl font-semibold text-shadow-sm text-shadow-white/50'>Backend</h3>
        <ul className='list-disc list-inside flex flex-wrap gap-2'>
          {backEnd.map((skill, index) => (
            <li key={index} className='text-gray-700'>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='font-outfit text-xl font-semibold text-shadow-sm text-shadow-white/50'>Tools</h3>
        <ul className='list-disc list-inside flex flex-wrap gap-2'>
          {tools.map((skill, index) => (
            <li key={index} className='text-gray-700'>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
