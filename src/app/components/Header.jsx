import Link from 'next/link'
import React from 'react'
import { TbGridDots } from "react-icons/tb";


const Header = () => {
  return (
    <header className='flex justify-end p-5 text-sm'>
      <div className='flex space-x-4 items-center'>
        <Link href={"https://mail.google.com"} className='hover:underline'>
        Gmail
        </Link>
        <Link href={"https://image.google.com"} className='hover:underline'>
        Images
        </Link>
        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2' />
        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:backdrop-brightness-105 hover:shadow-md transition-shadow'>Sign In</button>
      </div>
    </header>
  )
}

export default Header
