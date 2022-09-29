import React from 'react'
import { useTheme } from '../../utils/context/useTheme';

interface Props {
  theme: string;
  side: string;
  img: string;
  color: string;
}

export const ThemeItem:React.FC<Props> = ({theme, side, img, color}) => {

  const { change } = useTheme();

  return (
    <div onClick={() => change(theme)} className={`cursor-pointer relative max-w-xs h-[300px] mx-4 my-3
    shadow-lg hover:shadow-lg  shadow-${color}  transition-colors rounded-[11px] `}>
        <div className={`absolute bottom-4 text-base text-center w-full text-${color}`}>{side}</div>
        <img className='h-full w-full rounded-xl object-cover' src={img} />
      </div>
  )
}
