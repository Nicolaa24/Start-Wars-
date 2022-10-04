import React from 'react'
import { IFilm, IPlanet } from '../../types/Interfaces'

interface Props {
  planet: IPlanet | undefined
}

export const PlanetInfo: React.FC<Props> = ({ planet }) => {
  return (
    <div className='bg-gray-200 h-full w-full p-6 text-xl overflow-auto'>
      <h1 className='mb-1 text-2xl '>{planet?.name}</h1>
      <div className='text-sm  h-full text-gray-500 flex flex-col '>
        <p >
          <span className='text-black'> Population:  </span>
           {planet?.population}
        </p>
        <p >
          <span className='text-black'> Rotation Period:  </span>
           {planet?.rotation_period} days
        </p>
        <p >
        <span className='text-black'> Orbital Period: </span>
          {planet?.orbital_period} days
        </p>
        <p >
          <span className='text-black'> Diameter:  </span>
           {planet?.diameter} km
        </p>
        <p >
          <span className='text-black'>  Gravity:  </span>
            {`${planet?.gravity[0]} ${planet?.gravity[2].toUpperCase()}${planet?.gravity.slice(3)}`}
        </p>  
        <p >
          <span className='text-black'>  Terrain:  </span>
            {planet?.terrain} 
        </p>  
        <p >
          <span className='text-black'> Surface Water:  </span>
           {planet?.surface_water}% 
        </p>
        <p >
          <span className='text-black'>  Climate:  </span>
            {planet?.climate} 
        </p>  
      </div>
    </div>
  )
};