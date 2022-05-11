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
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
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