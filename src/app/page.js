import React from 'react'
import Header from './components/Header'
import Image from 'next/image'
import Home from './components/Home'


const page = () => {
  return (
    <div>
      <Header/>
      <div className='flex flex-col items-center mt-24'>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google Logo" width={300} height={100} priority style={{width : "auto"}}/>
        <Home/>
      </div>
    </div>
  )
}

export default page
