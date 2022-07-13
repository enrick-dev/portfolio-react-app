import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8' >
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#DB2777]'>
                    Sobre </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold text-gray-300 '>
                    <p>Ola. Prazer em conhece-lo, conheça um pouco sobre mim.</p> 
                </div>
                <div>
                    <p>Sou apaixonado pela construção de websites modernos, 
                    responsivos e minimalistas, inexperiente 
                    profissionalmente mas completamente empenhado no que faz.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About