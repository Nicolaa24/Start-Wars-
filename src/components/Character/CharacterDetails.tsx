import React from 'react'

import { Link } from 'react-router-dom';
import { IFilm, Peoples, Species, StarShip, Vehicle } from '../../types/Interfaces';
import { getCategoryLink, getItemId, IMG_URL, makeConcurrentRequest } from '../../utils/service/api';


interface Props {
  character: string[] | undefined;
  title: string;
  imgCategory: string;
}

type Details = Vehicle & IFilm & StarShip;

export const CharacterDetails: React.FC<Props> = ({ character, title, imgCategory }) => {
  const [charactersDetails, setCharactersDetails] = React.useState<Details[]>([]);

  React.useEffect(() => {
   
    (async () => {
      const validCharacters: Details[] = await makeConcurrentRequest((character as string[]))
      setCharactersDetails(validCharacters)
    })();

  }, []);
  
  
  return (
    <div className='h-full w-[30%] bg-gray-200 text-gray-700 rounded-sm mr-5 p-4 overflow-x-auto'>
      <div className='h-[20%]  border-b-2 border-black flex justify-start'>
        <p>{title}</p>
      </div>
      { charactersDetails.length > 0
        ? charactersDetails.map(item => (
        <Link to={`/${getCategoryLink(imgCategory)}/${getItemId(item.url)}`}>
          <div key={item.url}
            className='w-full m-2 flex items-center hover:px-2'>
            <img className='h-[60px] rounded-full w-[60px] mx-2'
              src={`${IMG_URL}${imgCategory}/${getItemId(item.url)}.jpg`} />
            <p className='mx-2'>{ imgCategory === 'films' ? item.title : item?.name }</p>
          </div>
        </Link>
        ))
        : <div>There are no related items for this category</div>
      }
      
    </div>
  )
};
