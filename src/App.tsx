import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';

import {
  Categories, Characters, Films, Species, StarShips, Vehicles, Planets, Character, Film, Planet, Vehicle, Specie, StarShip, Home, Favorites, Search, NotFound, Register
} from './pages';

import { useTheme } from './utils/context/useTheme';

import { ROUTES } from './utils/constans/routes';


export const App = () => {
  const { color } = useTheme();

  return (
    <div className={`bg-${color}`}>

      
      <Header />
      
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />

        <Route path={ROUTES.AUTH} element={ <Register/>} />

        <Route path={ROUTES.CATEGORIES} element={<Categories />} />
        
        <Route path={ROUTES.FILMS} element={<Films />} />
        <Route path={ROUTES.CHARACTERS} element={<Characters />} />
        <Route path={ROUTES.PLANETS} element={<Planets />} />
        <Route path={ROUTES.STARSHIPS} element={<StarShips />} />
        <Route path={ROUTES.SPECIES} element={<Species />} />
        <Route path={ROUTES.VEHICLES} element={<Vehicles />} />

        <Route path={ROUTES.FILM} element={<Film />} />
        <Route path={ROUTES.CHARACTER} element={<Character />} />
        <Route path={ROUTES.PLANET} element={<Planet />} />
        <Route path={ROUTES.STARSHIP} element={<StarShip />} />
        <Route path={ROUTES.SPECIE} element={<Specie />} />
        <Route path={ROUTES.VEHICLE} element={<Vehicle />} />

        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path={ROUTES.FAVORITE} element={<Favorites />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Routes>
    </div>
  )
};
