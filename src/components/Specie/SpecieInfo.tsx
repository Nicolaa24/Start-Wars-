import React from 'react'

import { ISpecies } from '../../types/Interfaces';

interface Props {
  specie: ISpecies | undefined;
}

export const SpecieInfo: React.FC<Props> = ({ specie }) => {
  return (
    <div className='bg-gray-200 h-full w-full p-6 text-xl overflow-auto rounded-md'>
      <h1 className='mb-1 text-2xl '>{specie?.name}</h1>
      <div className='text-sm  h-full text-gray-500 flex flex-col '>
        <p className='pb-1'>
          <span className='text-black'> Classification:  </span>
           {specie?.classification}
        </p>
        <p className='pb-1'>
          <span className='text-black'> Designation:   </span>
           {specie?.designation} 
        </p>
        <p className='pb-1'>
        <span className='text-black'> Language: </span>
          {specie?.language} 
        </p>
        <p className='pb-1'>
          <span className='text-black'> Avg Lifespan: </span>
           {specie?.average_lifespan} years
        </p>
        <p className='pb-1'>
          <span className='text-black'> Avg Height : </span>
           {specie?.average_height}cm
        </p>
        <p className='pb-1'>
          <span className='text-black'> Hair Color(s): </span>
           {specie?.hair_colors}
        </p>
        <p className='pb-1'>
          <span className='text-black'> Skin Color(s): </span>
           {specie?.skin_colors}
        </p>
        <p className='pb-1'>
          <span className='text-black'>  Eye Color(s):  </span>
            {specie?.eye_colors} 
        </p>  
      </div>
    </div>
  )
};