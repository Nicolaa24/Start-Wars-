import React from 'react'

import { useParams, useNavigate } from 'react-router-dom';

import { BASE_URL, getInfo } from '../../utils/service/api';
import {Peoples} from '../../types/Interfaces'
import { CharacterDetails, CharacterImage, CharacterInfo } from '../../components/';

import { useAppSelector } from '../../redux/store/hooks';


export const Character = () => {
  const [character, setCharacter] = React.useState<Peoples>();
  const [favoriteCharacter, setFavoriteCharacter] = React.useState(false);

  const favorites = useAppSelector(state => state.favorite.favorites)

  const navigate = useNavigate()
  const { id } = useParams();

  React.useEffect(() => {
    getInfo(BASE_URL, 'people', id, setCharacter);

    favorites.find(item => item.id === id && item.category === 'characters')
      ? setFavoriteCharacter(true)
      : setFavoriteCharacter(false);
    
  }, []);

  
  return (
    <div className='w-screen h-screen bg-black'>
      
      <button className='bg-purple-400  mb-2 mx-6 p-1 rounded-lg hover:text-white'
        onClick={() => navigate(-1)}>
        Previous page
      </button>

      <div className='w-[70%] h-[40%] flex flex-row m-auto mb-6 rounded-sm'>
        <CharacterImage
          id={id}
          character={character}
          favoriteCharacter={favoriteCharacter}
          setFavoriteCharacter={setFavoriteCharacter}
        />
        <CharacterInfo character={character} />
      </div>

      <div className='w-[90%] h-[25%] flex flex-row m-auto'>
        {character &&
          <CharacterDetails imgCategory='films' title='Related Films' character={character.films}
          />
        }
        {character &&
          <CharacterDetails imgCategory='vehicles' title='Related Vehicles' character={character.vehicles}
          />
        }
        {character &&
          <CharacterDetails imgCategory='starships' title='Related Starships' character={character.starships}
          />
        }
      </div>
      
    </div>
  )
};
