import React from 'react'

import { BsFillStarFill } from 'react-icons/bs';

import { favoriteSlice } from '../../redux/slices/FavoriteSlice';
import { useAppDispatch } from '../../redux/store/hooks';
import { IVehicle } from '../../types/Interfaces';
import { IMG_URL } from '../../utils/service/api';

interface Props {
  id: string | undefined;
  vehicle: IVehicle | undefined;
  favoriteVehicle: boolean;
  setFavoriteVehicle: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
}

export const VehicleImage: React.FC<Props> = (
  { id,
    vehicle,
    category,
    favoriteVehicle,
    setFavoriteVehicle
  } ) => {
   const dispatch = useAppDispatch()
  const { addItem, removeItem } = favoriteSlice.actions;
  
  const dispatchFavoriteItem = () => {
    if (favoriteVehicle) {
      const item = {
        title: vehicle?.name,
        id: id,
        category: category,
      }
      dispatch(removeItem(item))
      setFavoriteVehicle(false);
    } else {
      const item = {
        title: vehicle?.name,
        id: id,
        category: category,
      }

      dispatch(addItem(item))
      setFavoriteVehicle(true);
    }
  };
  return (
     <div className='w-[45%] h-full relative'>
      <img className='h-[275px] w-full object-fill rounded-sm'
        src={`${IMG_URL}vehicles/${id}.jpg`}
      />
      <button className='text-white absolute  top-[-19px] right-1'
          onClick={dispatchFavoriteItem}
        >
        <BsFillStarFill className={favoriteVehicle ? 'text-pink-400' : 'text-gray-200 drop-shadow-xl'} size={30} />
        </button>
  
    </div>
  )
}
