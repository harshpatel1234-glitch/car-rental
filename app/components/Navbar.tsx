import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-3 px-5 shadow-md border-b-[1px]'>
      <Image  src='/logo.jpg' alt='logo' width={70} height={70}  />
      <div className=' hidden md:flex gap-5'>
        <a href="#home" className=' hover:bg-blue-500 p-2 text-xl rounded-full hover:text-white px-3 cursor-pointer transition-all'>Home</a>
        <a href="#about" className=' hover:bg-blue-500 p-2 text-xl rounded-full hover:text-white px-3 cursor-pointer transition-all'>About</a>
        <a href="#contact" className=' hover:bg-blue-500 p-2 text-xl rounded-full hover:text-white px-3 cursor-pointer transition-all'>Contact</a>
      </div>
      <UserButton />
    </div>
  )
}

export default Navbar
