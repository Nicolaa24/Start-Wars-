import React from 'react'

import { useParams, useNavigate } from 'react-router-dom';

import { BASE_URL, getInfo } from '../utils/service/api';
import { IPlanet} from '../types/Interfaces'

import { useAppSelector } from '../redux/store/hooks';

import { PlanetImage } from '../components/Planet/PlanetImage';
import { PlanetInfo } from '../components/Planet/PlanetInfo';
import { PlanetDetails } from '../components/Planet/PlanetDetails';


export const Planet = () => {
  const [planet, setPlanet] = React.useState<IPlanet>();
  const [favoritePlanet, setFavoritePlanet] = React.useState(false);

  const favorites = useAppSelector(state => state.favorite.favorites)

  const navigate = useNavigate()
  const { id } = useParams();

  React.useEffect(() => {
    getInfo(BASE_URL, 'planets', id, setPlanet);

    favorites.find(item => item.id === id && item.category === 'planets')
      ? setFavoritePlanet(true)
      : setFavoritePlanet(false);
    
  }, []);
  
  return (
    <div className='w-full h-full bg-black'>
      
      <button className='bg-purple-400  mb-2 mx-6 p-1 rounded-lg hover:text-white'
        onClick={() => navigate(-1)}>
        Previous page
      </button>

      <div className='w-[70%] h-[40%] flex flex-row m-auto mb-6 rounded-sm'>
        <PlanetImage
          id={id}
          category={'planets'}
          planet={planet}
          favoritePlanet={favoritePlanet}
          setFavoritePlanet={setFavoritePlanet}
        />
        <PlanetInfo planet={planet} />
      </div>

      <div className='w-[90%] h-[25%] flex flex-row m-auto'>
        {planet &&
          <PlanetDetails title="Related Films" imgCategory="films" planet={planet?.films} />
        }
        {planet &&
          <PlanetDetails title="Residents" imgCategory="characters" planet={planet?.residents} />
        }
      </div>
      
    </div>
  )
};
