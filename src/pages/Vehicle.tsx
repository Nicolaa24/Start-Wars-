import React from 'react'

import { useParams, useNavigate } from 'react-router-dom';

import { BASE_URL, getInfo } from '../utils/service/api';
import { IVehicle} from '../types/Interfaces'

import { useAppSelector } from '../redux/store/hooks';
import { VehicleImage } from '../components/Vehicle/VehicleImage';
import { VehicleInfo } from '../components/Vehicle/VehicleInfo';
import { VehicleDetails } from '../components/Vehicle/VehicleDetails';


export const Vehicle = () => {
  const [vehicle, setVehicle] = React.useState<IVehicle>();
  const [favoriteVehicle, setFavoriteVehicle] = React.useState(false);

  const favorites = useAppSelector(state => state.favorite.favorites)

  const navigate = useNavigate()
  const { id } = useParams();

  React.useEffect(() => {
    getInfo(BASE_URL, 'vehicles', id, setVehicle);

    favorites.find(item => item.id === id && item.category === 'vehicles')
      ? setFavoriteVehicle(true)
      : setFavoriteVehicle(false);
    
  }, []);
  
  return (
    <div className='w-full h-full bg-black'>
      
      <button className='bg-purple-400  mb-2 mx-6 p-1 rounded-lg hover:text-white'
        onClick={() => navigate(-1)}>
        Previous page
      </button>

      <div className='w-[70%] h-[40%] flex flex-row m-auto mb-6 rounded-sm'>
        <VehicleImage
          id={id}
          category={'vehicles'}
          vehicle={vehicle}
          favoriteVehicle={favoriteVehicle}
          setFavoriteVehicle={setFavoriteVehicle}
        />
        <VehicleInfo vehicle={vehicle} />
      </div>

      <div className='w-[90%] h-[25%] flex flex-row m-auto'>
        {vehicle &&
          <VehicleDetails title="Related Films" imgCategory="films" vehicle={vehicle?.films} />
        }
        {vehicle &&
          <VehicleDetails title="Related Pilots" imgCategory="characters" vehicle={vehicle?.pilots} />
        }
      </div>
      
    </div>
  )
};