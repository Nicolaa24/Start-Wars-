import React from 'react'

import { useParams, useNavigate } from 'react-router-dom';

import { BASE_URL, getInfo } from '../utils/service/api';
import {Peoples} from '../types/Interfaces'
import { CharacterFilms } from '../components/Character/CharacterFilms';
import { CharacterStarships } from '../components/Character/CharacterStarships';
import { CharacterVehicles } from '../components/Character/CharacterVehicles';
import { CharacterDetails } from '../components/Character/CharacterDetails';
import { CharacterImage } from '../components/Character/CharacterImage';


export const Character = () => {

  const [character, setCharacter] = React.useState<Peoples>();

  const navigate = useNavigate()
  const { id } = useParams();

  React.useEffect(() => {
    getInfo(BASE_URL, 'people', id, setCharacter);
  }, []);
  
  return (
    <div className='w-screen h-screen bg-black'>
      
      <button className='bg-purple-400  mb-2 mx-6 p-1 rounded-lg hover:text-white'
        onClick={() => navigate(-1)}>
        Previous page
      </button>

      <div className='w-[70%] h-[40%] flex flex-row m-auto mb-6 rounded-sm'>
        <CharacterImage id={id} character={ character} />
        <CharacterDetails character={character} />
      </div>

      <div className='w-[90%] h-[25%] flex flex-row m-auto'>
        <CharacterFilms title='Related Films' character={character} />
        <CharacterStarships title='Related Starships' character={character} />
        <CharacterVehicles title='Related Vehicles' character={character} />
      </div>
      
    </div>
  )
};
