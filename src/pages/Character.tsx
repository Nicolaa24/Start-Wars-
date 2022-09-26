import React from 'react'

import { useParams } from 'react-router-dom';

import { BASE_URL, getInfo } from '../utils/service/api';
import {Peoples} from '../types/Interfaces'


export const Character = () => {

  const [character, setCharacter] = React.useState<Peoples>();

   const { id } = useParams();

  React.useEffect(() => {
      getInfo(BASE_URL, 'people', id, setCharacter);
  }, []);

  
  return (
    <div className='text-white'>{character?.name}</div>
  )
}
