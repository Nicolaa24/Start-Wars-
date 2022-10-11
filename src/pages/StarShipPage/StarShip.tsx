import React from 'react'

import { useParams, useNavigate } from 'react-router-dom';

import { BASE_URL, getInfo } from '../../utils/service/api';
import { IStarShip} from '../../types/Interfaces'

import { useAppSelector } from '../../redux/store/hooks';

import { StarshipImage, StarShipDetails, StarShipInfo } from '../../components';


export const StarShip = () => {
  const [starship, setStarShip] = React.useState<IStarShip>();
  const [favoriteStarship, setFavoriteStarship] = React.useState(false);

  const favorites = useAppSelector(state => state.favorite.favorites)

  const navigate = useNavigate()
  const { id } = useParams();

  React.useEffect(() => {
    getInfo(BASE_URL, 'starships', id, setStarShip);

    favorites.find(item => item.id === id && item.category === 'starships')
      ? setFavoriteStarship(true)
      : setFavoriteStarship(false);
    
  }, []);

  console.log(starship)
  
  return (
    <div className='w-full h-full bg-black'>
      
      <button className='bg-purple-400  mb-2 mx-6 p-1 rounded-lg hover:text-white'
        onClick={() => navigate(-1)}>
        Previous page
      </button>

      <div className='w-[70%] h-[40%] flex flex-row m-auto mb-6 rounded-sm'>
        <StarshipImage
          id={id}
          category={'starships'}
          starship={starship}
          favoriteStarship={favoriteStarship}
          setFavoriteStarship={setFavoriteStarship}
        />
        <StarShipInfo starship={starship} />
      </div>

      <div className='w-[90%] h-[25%] flex flex-row m-auto'>
        {starship &&
          <StarShipDetails title="Related Films" imgCategory="films" starship={starship?.films} />
        }
        {starship &&
          <StarShipDetails title="Related Pilots" imgCategory="characters" starship={starship?.pilots} />
        }
      </div>
      
    </div>
  )
};
