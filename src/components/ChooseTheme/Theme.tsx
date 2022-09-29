import React from 'react'
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from '../../utils/context/ThemeProvider';
import imgLightSide from '../../assets/images/sides/light.jpeg';
import imgDarktSide from '../../assets/images/sides/dark.jpeg';
import imgNeitralSide from '../../assets/images/sides/neitral.jpeg';
import { useTheme } from '../../utils/context/useTheme';
import { ThemeItem } from './ThemeItem';


export const Theme = () => {

  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: imgLightSide,
      color: 'gray-300'
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: imgDarktSide,
      color: 'red-500'
    },
    {
      theme: THEME_NEITRAL,
      text: 'Solo Warrior',
      img: imgNeitralSide,
      color: 'yellow-300'
    },
  ]

  return (
    <div className='flex flex-wrap'>

      {elements.map(item => (
        <ThemeItem
          key={item.text}
          theme={item.theme}
          side={item.text}
          img={item.img}
          color={item.color}
        />
      ))}
    
    </div>
  )
};
