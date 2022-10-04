import React from 'react'

import { Link } from 'react-router-dom';
import { IFilm, Peoples } from '../../types/Interfaces';
import { getCategoryLink, getItemId, IMG_URL, makeConcurrentRequest } from '../../utils/service/api';


interface Props {
  starship: string[] | undefined;
  title: string;
  imgCategory: string;
}

type Details =  IFilm & Peoples;

export const StarShipDetails: React.FC<Props> = ({ starship, title, imgCategory }) => {
  const [starshipsDetails, setStarshipsDetails] = React.useState<Details[]>([]);

  React.useEffect(() => {
   
    (async () => {
      const validPlanets: Details[] = await makeConcurrentRequest((starship as string[]))
      setStarshipsDetails(validPlanets)
    })();

  }, []);
  
  
  return (
    <div className='h-[220px] w-[30%] bg-gray-200 text-gray-700 rounded-sm mr-5 p-4 mb-8 overflow-y-auto'>
      <div className='h-[20%]  border-b-2 border-black flex justify-start'>
        <p className='pb-2'>{title}</p>
      </div>
      { starshipsDetails.length > 0
        ? starshipsDetails.map(item => (
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
