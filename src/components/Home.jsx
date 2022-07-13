import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center'>
            <p className='text-[#DB2777]'>Olá, meu nome é</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Enrick Santos</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Eu sou um desenvolvedor Front End.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Sou um jovem sem experiencia profissional, mas com experiência em 
            alguns pequenos projetos pessoais. Tenho habilidades no desenvolvimento 
            web em Html, Css, Javascript, PHP e MySql. Atualmente estudando React 
            Js.</p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#DB2777] hover:border-[#DB2777]' >
                  Ver Trabalho <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/> 
                </button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Home