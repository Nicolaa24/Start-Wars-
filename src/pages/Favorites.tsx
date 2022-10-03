import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/store/hooks'
import { getCategoryLink } from '../utils/service/api';

export const Favorites = () => {

  const favorites = useAppSelector(state => state.favorite.favorites);

  if (favorites.length === 0) {
    return (
      <div className='h-screen w-screen text-white text-2xl mt-6 text-center '>
      You don't have favorite items
      </div>
    )
  };

  return (
    <div className='text-white w-[85%] h-screen text-center m-auto  grid grid-cols-5 bg-black'>
      {favorites.map((item) => (
        <Link to={`/${getCategoryLink(item.category)}/${item.id}`}>
          <div className='h-[150px] mb-2 mr-4 text-white'>
          <div className='w-full h-full'>
                
            <img className='h-[90%] w-full object-contain '
              src={`https://starwars-visualguide.com/assets/img/${item.category}/${item?.id}.jpg`} />
            <span className='text-white'>{item?.title}</span>
          </div>
        </div>
        </Link>
        
      ))}
      
    </div>
  )
}
