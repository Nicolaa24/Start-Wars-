import React from 'react'
import {BsFillStarFill  } from 'react-icons/bs'
import { favoriteSlice } from '../../redux/slices/FavoriteSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { Peoples } from '../../types/Interfaces';
import { IMG_URL } from '../../utils/service/api';

interface Props {
  id: string | undefined;
  character: Peoples | undefined;
  favoriteCharacter: boolean;
  setFavoriteCharacter:React.Dispatch<React.SetStateAction<boolean>>
}

export const CharacterImage: React.FC<Props> = (
  { id,
    character,
    favoriteCharacter,
    setFavoriteCharacter }
) => {
  const { isLogined } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const { addItem, removeItem } = favoriteSlice.actions;
  
  const dispatchFavoriteItem = () => {
    if (favoriteCharacter) {
      const item = {
        title: character?.name,
        id: id,
        category: 'characters'
      }
      dispatch(removeItem(item))
      setFavoriteCharacter(false);
    } else {
      const item = {
        title: character?.name,
        id: id,
        category: 'characters'
      }

      dispatch(addItem(item))
      setFavoriteCharacter(true);
    }
  };

  return (
    <div className='w-[45%] h-full relative'>
      <img className='h-full w-full object-fill '
        src={`${IMG_URL}characters/${id}.jpg`}
      />
      {
        isLogined
          ? <button className='text-white absolute  top-[-19px] right-1'
            onClick={dispatchFavoriteItem}
          >
            <BsFillStarFill className={favoriteCharacter ? 'text-pink-400' : 'text-gray-200 drop-shadow-xl'} size={30} />
          </button>
          : <button className='text-white absolute  top-[-19px] right-1'
            disabled
            onClick={dispatchFavoriteItem}
          >
            <BsFillStarFill className={favoriteCharacter ? 'text-pink-400' : 'text-gray-200 drop-shadow-xl'} size={30} />
          </button>
      }
      
  
    </div>
  )
};
