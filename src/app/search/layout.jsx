import React from 'react'
import Search from '../components/Search'
import "./../globals.css"

const layout = ({children}) => {
  return (
    <div>
    <Search/>
    {children}
    </div>
  )
}

export default layout

