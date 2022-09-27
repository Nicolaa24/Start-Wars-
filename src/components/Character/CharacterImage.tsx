import React from 'react'
import {FaRegStar} from 'react-icons/fa'
import { favoriteSlice } from '../../redux/slices/Favorite';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { Peoples } from '../../types/Interfaces';

interface Props {
  id: string | undefined;
  character: Peoples | undefined;
}

export const CharacterImage: React.FC<Props> = ({ id, character }) => {
  const dispatch = useAppDispatch()
  const { addItem } = favoriteSlice.actions
  
  const addFavoriteItem = () => {
    const item = {
      title: character?.name,
      img: id
    }

   dispatch(addItem(item))
 }
 
  return (
    <div className='w-[45%] h-full relative'>
      <img className='h-full w-full object-fill '
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
      <button className='text-white absolute top-[-16px] right-2 '
        onClick={()=>addFavoriteItem()}
      >
        <FaRegStar className='text-pink-400 ' size={30} />
      </button>
    </div>
  )
};
