import React from 'react'
import { Peoples } from '../../types/Interfaces';

interface Props {
  character: Peoples | undefined;
  title: string;
}

export const CharacterVehicles: React.FC<Props> = ({ title, character }) => {
  return (
    <div className='h-full w-[30%] bg-gray-200 text-gray-700 rounded-sm mr-5 p-4'>
      
      <div className='border-b-2 border-black mb-1 pb-1'>
        {title}
      </div>

      <div>
        {character?.vehicles.length === 0
          ? <div>There are no related items for this category</div>
          : character?.vehicles.map(item => (
            <div>{item}</div>
          ))
        }
      </div>
    
    </div>
  )
};
