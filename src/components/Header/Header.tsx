import React from 'react'
import { Link } from 'react-router-dom';
// import { GiStarfighter, GiStarSkull, GiStarSattelites } from 'react-icons/gi';
import droid from '../../assets/images/droid.svg';
import lightsaber from '../../assets/images/lightsaber.svg';
import spaceStation from '../../assets/images/space-station.svg';

import {IconType} from 'react-icons'

import { useAppSelector } from '../../redux/store/hooks';
import { useTheme } from '../../utils/context/useTheme';
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from '../../utils/context/ThemeProvider';


export const Header = () => {
  const [icon, setIcon] = React.useState<string>(spaceStation);
  const favorites = useAppSelector(state => state.favorite.favorites);
  const { theme } = useTheme();

  const Icon = icon

  React.useEffect(() => {
    switch (theme) {
      case THEME_LIGHT: setIcon(lightsaber);
        break;
      case THEME_DARK: setIcon(spaceStation);
        break;
      case THEME_NEITRAL: setIcon(droid);
        break;
      default: setIcon(droid);
        break;
    }
  }, [theme]);

  return (
    <div className='w-full h-[20%] '>

      <div className='flex flex-col'>
        <div className='flex flex-row mx-5 mt-5'>

          <Link to='/'>
            {/* <span >
              <GiStarfighter className='text-pink-400 mx-2 text-center items-center' size={58} />
            </span> */}
            <div className='flex items-center w-16 object-cover'>
                <img src={icon}  alt='/'/>
            </div>
           
      
          </Link>

          <Link className='text-purple-400 text-xl relative ml-4 flex items-center' to='/favorite'>
            Favorite
            {favorites.length !== 0
              ? <span className='bg-white text-sm absolute top-1 right-[-8px] px-[5px] rounded-full'>
                {favorites.length}
              </span>
              : null
            }
            
          </Link>
          <Link className='text-purple-400 text-xl ml-5 flex items-center' to=''>
            Search
          </Link>
        </div>
        <h1 className='max-w-[300px] h-[5%] ml-auto mr-auto  mb-5 text-yellow-400 text-4xl'>
          <Link to='/categories'>
            Star Wars Info
          </Link>
        </h1>
      </div>
        
    </div>
  )
};