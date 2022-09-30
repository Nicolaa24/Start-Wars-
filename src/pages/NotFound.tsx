import React from 'react';

import notFoundImg from '../assets/images/404/not-found.jpg';
 
export const NotFound = () => {
  return (
    <div className='text-white h-screen bg-black relative  max-w-[390px] ml-auto mr-auto'>
      <img src={notFoundImg} className='absolute  object-cover w-full r h-full m-auto'/>
      <p className='absolute top-[3%] mx-3 text-white text-5xl '>Is not correct url data</p>
    </div>
  )
}
