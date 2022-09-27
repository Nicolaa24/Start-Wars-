import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
   <div className='w-full h-[20%] flex items-center '>
        <div>
          <Link to='/favorite'>
            <button className='bg-white'>Favorite</button>
          </Link>
        </div>
        <h1 className='max-w-[300px] h-[10%] ml-auto mr-auto text-yellow-400 text-3xl'>
          Star Wars Info
        </h1>
      </div>
  )
}
