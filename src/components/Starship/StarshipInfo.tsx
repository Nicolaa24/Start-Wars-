import React from 'react'

import { IStarShip } from '../../types/Interfaces';

interface Props {
  starship: IStarShip | undefined;
}

export const StarShipInfo: React.FC<Props> = ({ starship }) => {
  return (
    <div className='bg-gray-200 h-full w-full p-6 text-xl overflow-auto rounded-md'>
      <h1 className='mb-1 text-2xl '>{starship?.name}</h1>
      <div className='text-sm  h-full text-gray-500 flex flex-col '>
        <p >
          <span className='text-black'> Model:  </span>
           {starship?.model}
        </p>
        <p >
          <span className='text-black'> Manufacturer:   </span>
           {starship?.manufacturer} 
        </p>
        <p >
        <span className='text-black'> Class: </span>
          {starship?.starship_class} 
        </p>
        <p >
          <span className='text-black'> Cost: </span>
           {starship?.cost_in_credits} credits
        </p>
        <p >
          <span className='text-black'>  Speed:  </span>
            {starship?.max_atmosphering_speed} {starship?.max_atmosphering_speed != 'n/a' ? 'km/h' : ''}  
        </p>  
        <p >
          <span className='text-black'> Hyperdrive Rating: </span>
           {starship?.hyperdrive_rating}
        </p>
        <p >
          <span className='text-black'> MGLT: </span>
           {starship?.MGLT}
        </p>
        <p >
          <span className='text-black'> Length: </span>
           {starship?.length}m
        </p>
        <p >
          <span className='text-black'>  Cargo Capacity:  </span>
            {starship?.cargo_capacity} metric tons
        </p>  
         <p >
          <span className='text-black'>  Passengers:  </span>
            {starship?.passengers} 
        </p> 
      </div>
    </div>
  )
};