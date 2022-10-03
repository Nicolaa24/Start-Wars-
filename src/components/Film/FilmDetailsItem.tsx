import React from 'react'
import { Link } from 'react-router-dom';
import { Peoples, Species } from '../../types/Interfaces';
import { getCategoryLink, getItemId, IMG_URL, makeConcurrentRequest } from '../../utils/service/api';

export interface Props {
  characters: string[] | undefined;
  title: string;
  imgCategory: string;
}

type Details = Peoples | Species;

export const FilmDetailsItem: React.FC<Props> = ({ characters, title, imgCategory }) => {
  const [filmDetails, setFilmDetails] = React.useState<Details[]>([]);

  React.useEffect(() => {
   
    (async () => {
      const validCharacters: Peoples[] = await makeConcurrentRequest((characters as string[]))
      setFilmDetails(validCharacters)
    })();

  }, []);
  

  return (
    <div className='h-[220px] w-[90%] bg-gray-200 text-gray-700 rounded-sm  mb-8 p-4  overflow-x-auto'>

      <div className='h-[20%]  border-b-2 border-black flex justify-start'>
        <p>{title}</p>
      </div>
      {filmDetails.map(item => (
        <Link to={`/${getCategoryLink(imgCategory)}/${getItemId(item.url)}`}>
          <div key={item.name}
            className='w-full m-2 flex items-center hover:px-2'>
            <img className='h-[60px] rounded-full w-[60px] mx-2'
              src={`${IMG_URL}${imgCategory}/${getItemId(item.url)}.jpg`} />
            <p className='mx-2'>{item?.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
};
