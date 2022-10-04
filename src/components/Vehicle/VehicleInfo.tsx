import React from 'react'

import { IVehicle } from '../../types/Interfaces';

interface Props {
  vehicle: IVehicle | undefined;
}

export const VehicleInfo: React.FC<Props> = ({ vehicle }) => {
  return (
    <div className='bg-gray-200 h-full w-full p-6 text-xl overflow-auto rounded-md'>
      <h1 className='mb-1 text-2xl '>{vehicle?.name}</h1>
      <div className='text-sm  h-full text-gray-500 flex flex-col '>
        <p className='pb-1'>
          <span className='text-black'> Model: </span>
           {vehicle?.model}
        </p>
        <p className='pb-1'>
          <span className='text-black'> Manufacturer:   </span>
           {vehicle?.manufacturer} 
        </p>
        <p className='pb-1'>
        <span className='text-black'> Class: </span>
          {vehicle?.vehicle_class[0].toUpperCase()}{vehicle?.vehicle_class.slice(1)} 
        </p>
        <p className='pb-1'>
          <span className='text-black'> Cost:: </span>
           {vehicle?.cost_in_credits} credits
        </p>
        <p className='pb-1'>
          <span className='text-black'> Speed: </span>
           {vehicle?.max_atmosphering_speed}km/h
        </p>
        <p className='pb-1'>
          <span className='text-black'> Length: </span>
           {vehicle?.length}m
        </p>
        <p className='pb-1'>
          <span className='text-black'> Cargo Capacity: </span>
           {vehicle?.cargo_capacity}kg
        </p>
        <p className='pb-1'>
          <span className='text-black'> Mimimum Crew:  </span>
            {vehicle?.crew} 
        </p>  
      </div>
    </div>
  )
};