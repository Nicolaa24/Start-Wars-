import React from 'react'
import { Peoples } from '../../types/Interfaces'

interface Props {
  character: Peoples | undefined
}

export const CharacterDetails: React.FC<Props> = ({ character }) => {
  return (
    <div className='bg-gray-200 w-full p-6 text-xl '>
      <h1 className='mb-1'>{character?.name}</h1>
      <div className='text-base h-full text-gray-700 flex flex-col'>
        <p >Birth Year: {character?.birth_year}</p>
        <p >Species: {character?.species.length !== 0 ? character?.species : 'Unknown'}</p>
        <p >Height: {character?.height} cm</p>
        <p >Mass: {character?.mass} kg</p>
        <p >Hair Color: {character?.hair_color}</p>
        <p >Skin Color: {character?.skin_color}</p>
        {/* <p >Homeworld: <a href={character?.homeworld}>Home</a></p> */}
      </div>
    </div>
  )
};
