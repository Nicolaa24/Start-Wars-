import React from 'react'

import { BsFillStarFill } from 'react-icons/bs';

import { favoriteSlice } from '../../redux/slices/FavoriteSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { IStarShip } from '../../types/Interfaces';
import { IMG_URL } from '../../utils/service/api';

interface Props {
  id: string | undefined;
  starship: IStarShip | undefined;
  favoriteStarship: boolean;
  setFavoriteStarship: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
}

export const StarshipImage: React.FC<Props> = (
  { id,
    starship,
    category,
    favoriteStarship,
    setFavoriteStarship
  }) => {
  const { isLogined } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const { addItem, removeItem } = favoriteSlice.actions;
  
  const dispatchFavoriteItem = () => {
    if (favoriteStarship) {
      const item = {
        title: starship?.name,
        id: id,
        category: category,
      }
      dispatch(removeItem(item))
      setFavoriteStarship(false);
    } else {
      const item = {
        title: starship?.name,
        id: id,
        category: category,
      }

      dispatch(addItem(item))
      setFavoriteStarship(true);
    }
  };
  return (
    <div className='w-[45%] h-full relative'>
      <img className='h-full w-full object-fill rounded-sm'
        src={`${IMG_URL}starships/${id}.jpg`}
      />
      {
        isLogined
          ? <button className='text-white absolute  top-[-19px] right-1'
            onClick={dispatchFavoriteItem}
          >
            <BsFillStarFill className={favoriteStarship ? 'text-pink-400' : 'text-gray-200 drop-shadow-xl'} size={30} />
          </button>
          : <button className='text-white absolute  top-[-19px] right-1'
            disabled
            onClick={dispatchFavoriteItem}
          >
            <BsFillStarFill className={favoriteStarship ? 'text-pink-400' : 'text-gray-200 drop-shadow-xl'} size={30} />
          </button>
      }
      
    </div>
  )
};
