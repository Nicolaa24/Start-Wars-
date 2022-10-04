import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../redux/store/hooks';
import { useTheme } from '../../utils/context/useTheme';
import logo from '../../assets/images/logo/StarWars- Logo.png';


export const Header = () => {
  const favorites = useAppSelector(state => state.favorite.favorites);
  const { icon } = useTheme();

  return (
    <div className='w-full h-[20%]  '>

      <div className='flex flex-col'>
        <div className='flex flex-row mx-6 mt-5'>

          <Link to='/'>
    
            <div className='flex items-center w-16 object-cove'>
                <img src={icon}  alt='' className='hover:px-1'/>
            </div>
           
          </Link>

          <Link className='text-purple-400 text-xl relative mx-6 flex items-center' to='/favorite'>
            Favorite
            {favorites.length !== 0
              ? <span className='bg-white text-sm absolute top-1 right-[-8px] px-[5px] rounded-full'>
                {favorites.length}
              </span>
              : null
            }
            
          </Link>
          <Link className='text-purple-400 text-xl ml-3 flex items-center' to='/search'>
            Search
          </Link>
        </div>
        <h1 className='max-w-[300px] h-[5%] ml-auto mr-auto  text-yellow-400 text-4xl hover:text-[40px]'>
          <Link to='/categories'>
            <img src={logo } className='p-0 hover:px-3'/>
          </Link>
        </h1>
      </div>
        
    </div>
  )
};