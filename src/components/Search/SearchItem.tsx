import React from 'react'
import { FoundItem } from '../../pages/Search'
import s from '../../assets/images/icons/droid.svg'
import { Link } from 'react-router-dom';

interface Props {
  searchItems: FoundItem[]
}

export const SearchItem: React.FC<Props> = ({ searchItems }) => {

  return (
    <div className='text-white w-full'>
      {searchItems.length
        ? (
          <ul className='m-5 list-none grid grid-cols-5 '>
            {searchItems.map(searchItem => (
              <Link
                to={`/${searchItem.category === 'people' ? searchItem.category = 'character' : searchItem.category}/${searchItem.id}`}
              >
                <li
                  className='h-[180px] mb-6 mr-4  text-white flex items-center '
                  key={Math.random()}>
                  <img
                    className='h-full rounded-md '
                    src={`https://starwars-visualguide.com/assets/img/${searchItem.category === 'character' ? searchItem.category = 'characters' : searchItem.category}/${searchItem.id}.jpg`}
                  />
                  <p className='p-1 ml-2 text-lg'>{searchItem.name ? searchItem.name : searchItem.title}</p>
                </li>
              </Link>
              
            ))
            }
          </ul>
        )
        : <h1 className=' text-3xl text-White font-bold max-w-[400px] flex items-center m-auto mt-7'>
          <p className='m-auto'>No results</p>
        </h1>
      }
    </div>
  )
};
