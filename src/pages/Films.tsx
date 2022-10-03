import React from 'react'

import { Link } from 'react-router-dom';
import { Pagination } from '../components/Pagination/Pagination';

import { fetchCharacters } from '../redux/slices/CategoriesSlice';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import { getItemId, IMG_URL } from '../utils/service/api';


export const Films = () => {

  const dispatch = useAppDispatch();
  const { characters } = useAppSelector(state => state.categories)
  
  const isCharactersLoading = characters.status === 'Loading';
  
  React.useEffect(() => {
    dispatch(fetchCharacters({ page: characters.currentPage, category: 'films' }))
  }, [characters.currentPage]);

  return (
    <div className=''>
      <Pagination
        currentPage={characters.currentPage}
        totalPage={1}
      />
      {isCharactersLoading
        ? <div className='text-white'>Loading</div>
        : <div>
          <div className='text-white w-[85%] h-[80%] text-center m-auto  grid grid-cols-5'>
            {characters.items.map((character) => (

              <Link to={`/film/${getItemId(character.url)}`}>
                <div className='h-full mb-4 mr-4'>
                  <div className='w-full h-full'>
                
                    <img className='h-[90%] w-full object-cover rounded-md mb-2 hover:h-[95%]'
                      src={`${IMG_URL}/films/${getItemId(character.url)}.jpg`} />
                    <span className='pt-1'>{character.title}</span>

                  </div>
                </div>
              </Link>
         
            ))}</div>
        </div>
      }
    </div>
  )
};
              
