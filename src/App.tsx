import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Character } from './pages/Character'

import { Characters } from './pages/Characters'
import { Films } from './pages/Films'
import { Home } from './pages/Home'


export const App = () => {

  return (
    <div className='h-screen w-screen bg-black '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/films' element={<Films />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/character/:id' element={<Character/>} />
      </Routes>
    </div>
  )
}
