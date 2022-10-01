import React from 'react'
import { IFilm } from '../../types/Interfaces'

interface Props {
  film: IFilm | undefined
}

export const FilmInfo: React.FC<Props> = ({ film }) => {
  return (
    <div className='bg-gray-200 h-full w-full p-6 text-xl overflow-auto'>
      <h1 className='mb-1 text-2xl'>Episode {film?.episode_id}: {film?.title}</h1>
      <div className='text-base h-full text-gray-500 flex flex-col '>
        <p >
          <span className='text-black'> Birth Year:  </span>
           {film?.producer}
        </p>
        <p >
          <span className='text-black'> Date Created:  </span>
           {film?.release_date}
        </p>
        <p >
        <span className='text-black'> Director : </span>
          {film?.director}
        </p>
        <p >
          <span className='text-black'> Producer(s):  </span>
           {film?.producer}
        </p>
        <p >
          <span className='text-black'>  Openning Crawl:  </span>
          {film?.opening_crawl}
        </p>  
      </div>
    </div>
  )
};
