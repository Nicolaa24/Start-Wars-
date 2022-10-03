import React from 'react'
import {BsFillStarFill  } from 'react-icons/bs'
import { favoriteSlice } from '../../redux/slices/FavoriteSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { IFilm, Peoples } from '../../types/Interfaces';

interface Props {
  id: string | undefined;
  film: IFilm | undefined;
  favoriteCharacter: boolean;
  setFavoriteCharacter: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
}

export const FilmImage: React.FC<Props> = (
  { id,
    film,
    category,
    favoriteCharacter,
    setFavoriteCharacter }
) => {
  const dispatch = useAppDispatch()
  const { addItem, removeItem } = favoriteSlice.actions
  
  const dispatchFavoriteItem = () => {
    if (favoriteCharacter) {
      const item = {
        title: film?.title,
        id: id,
        category: category,
      }
      dispatch(removeItem(item))
      setFavoriteCharacter(false);
    } else {
      const item = {
        title: film?.title,
        id: id,
        category: category,
      }

      dispatch(addItem(item))
      setFavoriteCharacter(true);
    }
  };

  return (
    <div className='w-[45%] h-full relative'>
      <img className='max-h-full w-full object-cover'
        src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
      />
      <button className='text-white absolute  top-[-19px] right-1'
          onClick={dispatchFavoriteItem}
        >
        <BsFillStarFill className={favoriteCharacter ? 'text-pink-400' : 'text-gray-200 drop-shadow-xl'} size={30} />
        </button>
  
    </div>
  )
};
