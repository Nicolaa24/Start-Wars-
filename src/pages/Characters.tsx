import React from 'react'

import { Link, useParams } from 'react-router-dom'
import { Pagination } from '../components/Pagination/Pagination';

import { categoriesSlice, fetchCharacters } from '../redux/slices/CategoriesSlice'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import { getItemId, IMG_URL } from '../utils/service/api';


export const Characters = () => {

  const dispatch = useAppDispatch();
  const { characters } = useAppSelector(state => state.categories)
  
  const isCharactersLoading = characters.status === 'Loading';
  
  React.useEffect(() => {
    dispatch(fetchCharacters({ page: characters.currentPage, category:'people' }))
  }, [characters.currentPage]);

  return (
    <div className=''>
          <Pagination
            currentPage={characters.currentPage}
            totalPage={9}
          />
      {isCharactersLoading
        ? <div className='text-white'>Loading</div>
        : <div>
          <div className='text-white w-[85%] h-[80%] text-center m-auto  grid grid-cols-5'>
            {characters.items.map((character, index) => (

              <Link to={`/character/${getItemId(character.url)}`}>
                <div className='h-full mb-5 mr-4'>
                  <div className='w-full h-full'>
                
                    <img className='h-[90%] w-full object-cover rounded-md hover:h-[95%]' src={`${IMG_URL}characters/${getItemId(character.url)}.jpg`} />
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
              