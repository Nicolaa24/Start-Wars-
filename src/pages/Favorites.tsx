import React from 'react'
import { useAppSelector } from '../redux/store/hooks'

export const Favorites = () => {

  const favorites = useAppSelector(state => state.favorite.favorites)
  console.log(favorites)

  return (
    <div>
      {favorites.map(item => (
        <div className='h-full mb-2 mr-4 text-white'>
          <div className='w-full h-full'>
                
            <img className='h-[90%] w-full object-cover ' src={`https://starwars-visualguide.com/assets/img/characters/${item?.img}.jpg`} />
            <span className='text-white'>{item?.title}</span>
          </div>
        </div>
      ))}
      
    </div>
  )
}
