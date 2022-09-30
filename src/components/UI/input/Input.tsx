import React from 'react';

import { MdOutlineCancel } from 'react-icons/md';

interface Props {
  search: string;
  handleSearch: (item: string) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: React.FC<Props> = ({ search, handleSearch, setSearch }) => {
  return (
    <div className='relative'>
      <input
        className='outline-none mx-7 rounded-sm p-1 min-w-[220px] border-2 text-lg text-gray-600 
            pr-[30px]'
        placeholder='Search'
        type='text'
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <MdOutlineCancel
        className='text-black absolute right-8 top-2 text-2xl cursor-pointer hover:text-3xl hover:top-1'
        onClick={() => setSearch('')}
      />
    </div>
  )
};
