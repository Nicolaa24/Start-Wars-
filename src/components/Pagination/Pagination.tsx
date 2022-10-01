import React from 'react';

import { categoriesSlice } from '../../redux/slices/CategoriesSlice';
import { useAppDispatch } from '../../redux/store/hooks';

interface Props {
  totalPage: number
  currentPage: number;
}

export const Pagination: React.FC<Props> = ({ currentPage, totalPage }) => {

  const dispatch = useAppDispatch();

  const { setCurrentPage } = categoriesSlice.actions

  const handlePrevPage = (number: number) => {
    dispatch(setCurrentPage(number - 1))
  }

  const handleNextPage = (number: number) => {
    dispatch(setCurrentPage(number + 1))
  }

  return (
    <div className='flex justify-end ml-[12%] mb-9 w-[80%]'>
      <div className='flex justify-'>
        {currentPage === 1
          ? <button
            disabled
            className='text-white bg-gray-400 mx-3 px-5 p-2 rounded-xl'
            onClick={() => handlePrevPage(currentPage)}>
            Prev Page
          </button>
          : <button
            className='text-white bg-yellow-400 mx-3 px-5 p-2 rounded-xl hover:text-black hover:font-semibold'
            onClick={() => handlePrevPage(currentPage)}>
            Prev Page
          </button>
        }
        {<div className='text-white mt-1 mx-1 text-2xl'>{currentPage}</div>}
        {currentPage === totalPage
          ? <button disabled
            className='text-white bg-gray-400 mx-3 px-5 p-2 rounded-xl'
            onClick={() => handleNextPage(currentPage)}>
            Next Page
          </button>
          : <button
            className='text-white bg-yellow-400 mx-3 px-5 p-2 rounded-xl hover:text-black hover:font-semibold'
            onClick={() => handleNextPage(currentPage)}>
            Next Page
          </button>
        }
      </div>
     
     
    </div>
  )
};
