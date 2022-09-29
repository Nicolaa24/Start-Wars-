import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Character } from './pages/Character';
import { Characters } from './pages/Characters';
import { Favorites } from './pages/Favorites';
import { Films } from './pages/Films';
import { Categories } from './pages/Categories';
import { Home } from './pages/Home';
import { useTheme } from './utils/context/useTheme';

export const App = () => {
  const { color } = useTheme();

  return (
    <div className={`bg-${color}`}>

      <Header/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/films' element={<Films />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/character/:id' element={<Character />} />
        <Route path='/favorite' element={<Favorites/>} />
      </Routes>
    </div>
  )
}
