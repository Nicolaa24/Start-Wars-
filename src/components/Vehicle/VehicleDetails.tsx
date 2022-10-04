import React from 'react'

import { Link } from 'react-router-dom';
import { IFilm, Peoples } from '../../types/Interfaces';
import { getCategoryLink, getItemId, IMG_URL, makeConcurrentRequest } from '../../utils/service/api';


interface Props {
  vehicle: string[] | undefined;
  title: string;
  imgCategory: string;
}

type Details =  IFilm & Peoples;

export const VehicleDetails: React.FC<Props> = ({ vehicle, title, imgCategory }) => {
  const [vehiclesDetails, setVehiclesDetails] = React.useState<Details[]>([]);

  React.useEffect(() => {
   
    (async () => {
      const validVehicle: Details[] = await makeConcurrentRequest((vehicle as string[]))
      setVehiclesDetails(validVehicle)
    })();

  }, []);
  
  
  return (
    <div className='h-[220px] w-[30%] bg-gray-200 text-gray-700 rounded-sm mr-5 p-4 mb-8 overflow-y-auto'>
      <div className='h-[20%]  border-b-2 border-black flex justify-start'>
        <p className='pb-2'>{title}</p>
      </div>
      { vehiclesDetails.length > 0
        ? vehiclesDetails.map(item => (
        <Link to={`/${getCategoryLink(imgCategory)}/${getItemId(item.url)}`}>
          <div key={item.url}
            className='w-full m-2 flex items-center hover:px-2'>
            <img className='h-[60px] rounded-full w-[60px] mx-2'
              src={`${IMG_URL}${imgCategory}/${getItemId(item.url)}.jpg`} />
              <p className='mx-2'>
                {imgCategory === 'films' ? <span>Episod {item.episode_id}: </span> : null}
                {imgCategory === 'films' ? item.title : item?.name}
              </p>
          </div>
        </Link>
        ))
        : <div>There are no related items for this category</div>
      }
      
    </div>
  )
};
