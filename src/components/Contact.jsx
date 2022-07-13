import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/1fb5b33e-551d-4c68-9e11-4b611133e325" method='POST' className='flex flex-col w-full max-w-[600px]'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contato</p>
                <p className='text-gray-300 py-4'>// Envie o formulario abaixo ou me envie um email - enricksantos03@gmail.com</p>
            </div>
            <input className='p-2 bg-[#cdd5ed]' type="text" placeholder='Nome' name='name' />
            <input className='my-4 p-2 bg-[#cdd5ed] ' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 bg-[#cdd5ed]' name="message" rows="10" placeholder='Mensagem' ></textarea>
            <button className='text-white border-4 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact