import WorkImg1 from '../assets/smart-banking.jpg'
import WorkImg2 from '../assets/workImg2.jpg'
import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
            <div className='pb-8'>
                <p className='text-4xl inline font-bold border-b-4 border-pink-600 text-gray-300'>Trabalhos</p>
                <p className='py-6'>Veja meus trabalhos mais recentes</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/* Grid */}
                <div style={{backgroundImage: `url(${WorkImg1})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Efeito de Hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider flex text-center'>
                        Aplicação em <br/> React JS e Tailwindcss
                        </span>
                        <div className='flex justify-center'><p>Em desenvolvimento</p></div>
                        <div className='pt-8 text-center'>
                            <a href="https://smartbanking-landingpage-figmadesign.vercel.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Site</button>
                            </a>
                            <a href="https://github.com/rick-png/smartbanking-landingpage-figmadesign">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Work