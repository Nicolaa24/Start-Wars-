import React from 'react'

import { BsFillStarFill } from 'react-icons/bs';

import { favoriteSlice } from '../../redux/slices/FavoriteSlice';
import { useAppDispatch } from '../../redux/store/hooks';
import { ISpecies } from '../../types/Interfaces';
import { IMG_URL } from '../../utils/service/api';

interface Props {
  id: string | undefined;
  specie: ISpecies | undefined;
  favoriteSpecie: boolean;
  setFavoriteSpecies: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
}

export const SpecieImage: React.FC<Props> = (
  { id,
    specie,
    category,
    favoriteSpecie,
    setFavoriteSpecies
  } ) => {
   const dispatch = useAppDispatch()
  const { addItem, removeItem } = favoriteSlice.actions;
  
  const dispatchFavoriteItem = () => {
    if (favoriteSpecie) {
      const item = {
        title: specie?.name,
        id: id,
        category: category,
      }
      dispatch(removeItem(item))
      setFavoriteSpecies(false);
    } else {
      const item = {
        title: specie?.name,
        id: id,
        category: category,
      }

      dispatch(addItem(item))
      setFavoriteSpecies(true);
    }
  };
  return (
     <div className='w-[45%] h-full relative'>
      <img className='h-[275px] w-full object-fill rounded-sm'
        src={`${IMG_URL}species/${id}.jpg`}
      />
      <button className='text-white absolute  top-[-19px] right-1'
          onClick={dispatchFavoriteItem}
        >
        <BsFillStarFill className={favoriteSpecie ? 'text-pink-400' : 'text-gray-200 drop-shadow-xl'} size={30} />
        </button>
  
    </div>
  )
}
