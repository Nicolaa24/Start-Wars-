import React from 'react'
import {BsFillStarFill  } from 'react-icons/bs'
import { favoriteSlice } from '../../redux/slices/FavoriteSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { Peoples } from '../../types/Interfaces';

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
  const dispatch = useAppDispatch()
  const { addItem, removeItem } = favoriteSlice.actions
  
  const dispatchFavoriteItem = () => {
    if (favoriteCharacter) {
      dispatch(removeItem(id))
      setFavoriteCharacter(false);
    } else {
      const item = {
        title: character?.name,
        id: id
      }

      dispatch(addItem(item))
      setFavoriteCharacter(true);
    }
  };

  return (
    <div className='w-[45%] h-full relative'>
      <img className='h-full w-full object-fill '
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />
      <button className='text-white absolute  top-[-19px] right-1'
          onClick={dispatchFavoriteItem}
        >
        <BsFillStarFill className={favoriteCharacter ? 'text-pink-400' : 'text-gray-200 drop-shadow-xl'} size={30} />
        </button>
  
    </div>
  )
};
