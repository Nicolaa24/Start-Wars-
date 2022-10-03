import React from 'react';
import { IFilm } from '../../types/Interfaces';

import { FilmDetailsItem } from './FilmDetailsItem';

interface Props {
  film: IFilm | undefined
}

export const FilmDetails: React.FC<Props> = ({ film }) => {
  return (
    <div className='w-[90%] h-[25%] text-center m-auto  grid grid-cols-3'>
      {film?.characters &&
        <FilmDetailsItem
          imgCategory='characters' title='Related Characters' characters={film?.characters}
        />
      }
      {film?.characters &&
        <FilmDetailsItem
          imgCategory='planets' title='Related Planets' characters={film?.planets}
        />
      }
      {film?.characters &&
        <FilmDetailsItem imgCategory='vehicles' title='Related Vehicles' characters={film?.vehicles}
        />
      }
      {film?.characters &&
        <FilmDetailsItem imgCategory='starships' title='Related Starships' characters={film?.starships}
        />
      }
      {film?.characters &&
        <FilmDetailsItem imgCategory='species' title='Related Species' characters={film?.species}
        />
      }
    </div>
  )
};
