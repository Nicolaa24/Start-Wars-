import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Character } from './pages/Character'

import { Characters } from './pages/Characters'
import { Films } from './pages/Films'
import { Home } from './pages/Home'


export const App = () => {

  return (
    <div className='h-screen w-screen bg-black '>
      <div className='w-full h-[20%] flex items-center '>
        <h1 className='max-w-[300px] h-[10%] ml-auto mr-auto text-yellow-400 text-3xl'>
          Star Wars Info
        </h1>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/films' element={<Films />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/character/:id' element={<Character/>} />
      </Routes>
    </div>
  )
}
