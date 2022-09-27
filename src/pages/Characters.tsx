import React from 'react'

import { Link, useParams } from 'react-router-dom'

import { fetchCharacters } from '../redux/slices/Categories'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'


export const Characters = () => {

  const dispatch = useAppDispatch();
  const { characters } = useAppSelector(state => state.categories)

  const isCharactersLoading = characters.status === 'Loading';
  
  React.useEffect(() => {
    dispatch(fetchCharacters())
  }, []);

  return (
    <div className=''>
      {isCharactersLoading
        ? <div className='text-white'>Loading</div>
        : <div>
          <div className='text-white w-[85%] h-[80%] text-center m-auto  grid grid-cols-5'>{characters.items.map((character, index) => (

            <Link to={`/character/${index + 1}`}>
              <div className='h-full mb-2 mr-4'>
              <div className='w-full h-full'>
                
                <img className='h-[90%] w-full object-cover ' src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} />
                <span>{character.name}</span>
              </div>
            </div>
            </Link>
         
          ))}</div>
        </div>
      }
    </div>
  )
};
              