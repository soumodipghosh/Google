import React from 'react'
import SearchBox from './SearchBox'
import Link from 'next/link'
import Image from 'next/image'
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';


const Search = () => {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href='/'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
            alt='Google Logo'
            width={60}
            height={40}
            priority
            style={{ width: 'auto' }}
          />
        </Link>
        <div className='flex-1 ml-0 md:ml-0 lg:ml-36'>
          <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-2'>
          <RiSettings3Line className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
          <TbGridDots className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
        </div>
        <button className='bg-blue-500 text-white px-2 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2'>
          Sign in
        </button>
      </div>
      <SearchHeaderOptions/>
    </header>
  )
}

export default Search
