import React from 'react'

interface Props {
  id:string | undefined
}

export const CharacterImage: React.FC<Props> = ({ id }) => {
  return (
    <div className='w-[60%] h-full'>
      <img className='h-full w-full object-fill '
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
    </div>
  )
};
