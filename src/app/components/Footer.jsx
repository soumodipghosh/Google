import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
      <div className='border-b px-8 py-3'>
        <p>India</p>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
        <ul className='flex items-center space-x-6'>
            <li className='hover:underline cursor-pointer'>About</li>
            <li className='hover:underline cursor-pointer'>Advertising</li>
            <li className='hover:underline cursor-pointer'>Business</li>
        </ul>
        <ul className='flex items-center space-x-6'>
            <li className='hover:underline cursor-pointer'>Privacy</li>
            <li className='hover:underline cursor-pointer'>Terms</li>
            <li className='hover:underline cursor-pointer'>Settings</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
