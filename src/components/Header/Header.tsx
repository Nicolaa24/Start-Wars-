import React from 'react'
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../redux/store/hooks';
import { useTheme } from '../../utils/context/useTheme';


export const Header = () => {
  const favorites = useAppSelector(state => state.favorite.favorites);
  const { icon } = useTheme();

  return (
    <div className='w-full h-[20%]  '>

      <div className='flex flex-col'>
        <div className='flex flex-row mx-5 mt-5'>

          <Link to='/'>
    
            <div className='flex items-center w-16 object-cove'>
                <img src={icon}  alt=''/>
            </div>
           
          </Link>

          <Link className='text-purple-400 text-xl relative ml-4 flex items-center' to='/favorite'>
            Favorite
            {favorites.length !== 0
              ? <span className='bg-white text-sm absolute top-1 right-[-8px] px-[5px] rounded-full'>
                {favorites.length}
              </span>
              : null
            }
            
          </Link>
          <Link className='text-purple-400 text-xl ml-5 flex items-center' to=''>
            Search
          </Link>
        </div>
        <h1 className='max-w-[300px] h-[5%] ml-auto mr-auto  mb-5 text-yellow-400 text-4xl'>
          <Link to='/categories'>
            Star Wars Info
          </Link>
        </h1>
      </div>
        
    </div>
  )
};