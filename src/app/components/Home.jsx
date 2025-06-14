"use client"
import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillMicFill} from "react-icons/bs"
import { useRouter } from 'next/navigation'

const Home = () => {
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`)
    }
    const randomSearch = async (e) => {
        setLoading(true)
        const response = await fetch("https://random-word-api.herokuapp.com/word")
        .then((res) => res.json())
        .then((data) => data[0])
        if(!response) return;
        router.push(`/search/web?searchTerm=${response}`)
        setLoading(false)
    }
  return (
    <div>
      <form action="" className='flex w-full mt-5 mx-auto maxw-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl' onSubmit={handleSubmit}>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3'/>
        <input type="text" className='flex-grow focus:outline-none' onChange={e => setInput(e.target.value)} />
        <BsFillMicFill className='text-lg'/>
      </form>
      <div className='flex space-y-2 justify-center mt-8 space-x-1'>
        <button className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow' onClick={handleSubmit}>Google Search</button>
        <button className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm' onClick={randomSearch} disabled={loading}>
            {loading ? "Loading..." : "I am Feeling Lucky"}
        </button>
      </div>
    </div>
  )
}

export default Home
