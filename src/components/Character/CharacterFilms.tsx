import React from 'react'
import { Peoples } from '../../types/Interfaces'

interface Props {
  character: Peoples | undefined;
  title: string;
}

export const CharacterFilms: React.FC<Props> = ({ character, title }) => {
  
  return (
    <div className='h-full w-[30%] bg-yellow-200 rounded-sm mr-5 p-4'>

      <div className='border-b-2 border-black mb-1 pb-1'>
        {title}
      </div>

      <div>
        {character?.films.map(film => (
          <div>{film}</div>
        ))}
      </div>

    </div>
  )
};
