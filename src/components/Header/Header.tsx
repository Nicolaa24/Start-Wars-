import React from 'react';

import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { useTheme } from '../../utils/context/useTheme';

import { removeUser } from '../../redux/slices/UserSlice';
import {ImExit} from 'react-icons/im'


export const Header = () => {
  const favorites = useAppSelector(state => state.favorite.favorites);
  const { isLogined, email } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch()

   const { icon } = useTheme();

  return (
    <div className='w-full max-h-[20%] flex flex-col justify-between'>

      <div className='flex justify-between'>
        <div className='flex flex-row mx-6 mt-5'>

          <Link to='/'>
    
            <div className='flex items-center w-16 object-cove'>
              <img src={icon} alt='' className='hover:px-1' />
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
        <div className='flex items-center  mt-5 '>
          <div className='text-white mr-5 text-lg'>
            User : {isLogined ? email : 'Guest'}
          </div>
          <Link className='text-purple-400 text-xl mr-6' to='/register'>
            Login
          </Link>
          {isLogined && 
          (
            <ImExit
              className='text-yellow-300 text-xl mr-7 cursor-pointer hover:'
              onClick={() => dispatch(removeUser())}>Log Out</ImExit>
          )}
        </div>
      </div>
      <h1 className='max-w-[300px] h-[5%] ml-auto mr-auto  text-yellow-400 text-5xl tracking-wider text-center hover:text-[52px]'>
        <Link to='/categories' className=' flex flex-col'>
          <h1>Star</h1>
          <h1>Wars</h1>
        </Link>
      </h1>
    </div>
  )
};