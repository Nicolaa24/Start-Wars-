import React from 'react'

import { useParams, useNavigate } from 'react-router-dom';

import { BASE_URL, getInfo } from '../utils/service/api';
import {IFilm, Peoples} from '../types/Interfaces'
import { CharacterFilms } from '../components/Character/CharacterFilms';
import { CharacterStarships } from '../components/Character/CharacterStarships';
import { CharacterVehicles } from '../components/Character/CharacterVehicles';
import { CharacterDetails } from '../components/Character/CharacterDetails';
import { CharacterImage } from '../components/Character/CharacterImage';
import { useAppSelector } from '../redux/store/hooks';
import { FilmImage } from '../components/Film/FilmImage';
import { FilmInfo } from '../components/Film/FilmInfo';
import { FilmCharacters } from '../components/Film/FilmCharacters';


export const Film = () => {
  const [film, setFilm] = React.useState<IFilm>();
  const [favoriteCharacter, setFavoriteCharacter] = React.useState(false);

  const favorites = useAppSelector(state => state.favorite.favorites)

  const navigate = useNavigate()
  const { id } = useParams();

  React.useEffect(() => {
    getInfo(BASE_URL, 'films', id, setFilm);

    favorites.find(item => item.id === id && item.category === 'films')
      ? setFavoriteCharacter(true)
      : setFavoriteCharacter(false);
    
  }, []);
  
  return (
    <div className='w-full h-full bg-black'>
      
      <button className='bg-purple-400  mb-2 mx-6 p-1 rounded-lg hover:text-white'
        onClick={() => navigate(-1)}>
        Previous page
      </button>

      <div className='w-[70%] h-[40%] flex flex-row m-auto mb-6 rounded-sm'>
        <FilmImage
          id={id}
          category={'films'}
          film={film}
          favoriteCharacter={favoriteCharacter}
          setFavoriteCharacter={setFavoriteCharacter}
        />
        <FilmInfo film={film} />
      </div>

      <div className='w-[90%] h-[25%] text-center m-auto  grid grid-cols-3'>
        <FilmCharacters/>
      </div>
      
    </div>
  )
};
