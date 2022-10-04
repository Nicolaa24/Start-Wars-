import React from 'react'

import { useParams, useNavigate } from 'react-router-dom';

import { BASE_URL, getInfo } from '../utils/service/api';
import { ISpecies} from '../types/Interfaces'

import { useAppSelector } from '../redux/store/hooks';
import { SpecieImage } from '../components/Specie/SpecieImage';
import { SpecieInfo } from '../components/Specie/SpecieInfo';
import { SpecieDetails } from '../components/Specie/SpecieDetails';


export const Specie = () => {
  const [specie, setSpecie] = React.useState<ISpecies>();
  const [favoriteSpecie, setFavoriteSpecies] = React.useState(false);

  const favorites = useAppSelector(state => state.favorite.favorites)

  const navigate = useNavigate()
  const { id } = useParams();

  React.useEffect(() => {
    getInfo(BASE_URL, 'species', id, setSpecie);

    favorites.find(item => item.id === id && item.category === 'species')
      ? setFavoriteSpecies(true)
      : setFavoriteSpecies(false);
    
  }, []);
  
  return (
    <div className='w-full h-full bg-black'>
      
      <button className='bg-purple-400  mb-2 mx-6 p-1 rounded-lg hover:text-white'
        onClick={() => navigate(-1)}>
        Previous page
      </button>

      <div className='w-[70%] h-[40%] flex flex-row m-auto mb-6 rounded-sm'>
        <SpecieImage
          id={id}
          category={'species'}
          specie={specie}
          favoriteSpecie={favoriteSpecie}
          setFavoriteSpecies={setFavoriteSpecies}
        />
        <SpecieInfo specie={specie} />
      </div>

      <div className='w-[90%] h-[25%] flex flex-row m-auto'>
        {specie &&
          <SpecieDetails title="Related Films" imgCategory="films" specie={specie?.films} />
        }
        {specie &&
          <SpecieDetails title="Related Characters" imgCategory="characters" specie={specie?.people} />
        }
      </div>
      
    </div>
  )
};