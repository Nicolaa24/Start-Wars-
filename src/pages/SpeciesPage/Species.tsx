import React from 'react';

import { Link } from 'react-router-dom';

import { Pagination } from '../../components/Pagination/Pagination';
import { fetchCharacters } from '../../redux/slices/CategoriesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { getItemId, IMG_URL } from '../../utils/service/api';

export const Species = () => {

  const dispatch = useAppDispatch();
  const { characters } = useAppSelector(state => state.categories);

  const isSpeciesLoading = characters.status === 'Loading';

  React.useEffect(() => {
    dispatch(fetchCharacters({ page: characters.currentPage, category: 'species' }))
  }, [characters.currentPage]);

  return (
    <div className=''>
      <Pagination
        currentPage={characters.currentPage}
        totalPage={4}
      />
      {isSpeciesLoading
        ? <div className='text-white h-screen'>Loading</div>
        : <div>
          <div className='text-white w-[85%] h-[80%] text-center m-auto  grid grid-cols-5'>
            {characters.items.map((specie) => (

              <Link key={specie.url} to={`/specie/${getItemId(specie.url)}`}>
                <div className='h-full mb-4 mr-4'>
                  <div className='w-full h-full'>
                
                    <img className='h-[200px] w-full object-cover rounded-md mb-2 hover:h-[210px]'
                      src={`${IMG_URL}/species/${getItemId(specie.url)}.jpg`} />
                    <span className='pt-1'>{specie.name}</span>

                  </div>
                </div>
              </Link>
         
            ))}</div>
        </div>
      }
    </div>
  )
};
