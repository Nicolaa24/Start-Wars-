import React from 'react'
import { Peoples } from '../../types/Interfaces';

export interface Props {
  character: Peoples | undefined;
  title: string;
}

export const CharacterStarships: React.FC<Props> = ({ title, character }) => {
  return (
    <div className='h-full w-[30%] bg-gray-200 text-gray-700 rounded-sm mr-5 p-4'>
      <div className='border-b-2 border-black mb-1 pb-1'>
        {title}
      </div>
      <div>
        {character?.starships.length === 0
          ? <div>There are no related items for this category</div>
          : character?.starships.map(starship => (
            <div>{starship}</div>
          ))
        }
      </div>
    
    </div>
  )
};
