import React from 'react'

import { BsFillStarFill } from 'react-icons/bs';

import { favoriteSlice } from '../../redux/slices/FavoriteSlice';
import { useAppDispatch } from '../../redux/store/hooks';
import { IPlanet } from '../../types/Interfaces';

interface Props {
  id: string | undefined;
  planet: IPlanet | undefined;
  favoritePlanet: boolean;
  setFavoritePlanet: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
}

export const PlanetImage: React.FC<Props> = (
  { id,
    planet,
    category,
    favoritePlanet,
    setFavoritePlanet
  } ) => {
   const dispatch = useAppDispatch()
  const { addItem, removeItem } = favoriteSlice.actions;
  
  const dispatchFavoriteItem = () => {
    if (favoritePlanet) {
      const item = {
        title: planet?.name,
        id: id,
        category: category,
      }
      dispatch(removeItem(item))
      setFavoritePlanet(false);
    } else {
      const item = {
        title: planet?.name,
        id: id,
        category: category,
      }

      dispatch(addItem(item))
      setFavoritePlanet(true);
    }
  };
  return (
     <div className='w-[45%] h-full relative'>
      <img className='h-full w-full object-cover '
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <button className='text-white absolute  top-[-19px] right-1'
          onClick={dispatchFavoriteItem}
        >
        <BsFillStarFill className={favoritePlanet ? 'text-pink-400' : 'text-gray-200 drop-shadow-xl'} size={30} />
        </button>
  
    </div>
  )
}
