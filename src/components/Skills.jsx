import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets//css.png'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
          Experiência</p>
          <p className='py-4 text-gray-300'>Tecnologias em que eu tenho experiência</p>
        </div>

        {/* Container Icons */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#041c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
              <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#041c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
              <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#041c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
              <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#041c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
              <p className='my-4'>REACT</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills