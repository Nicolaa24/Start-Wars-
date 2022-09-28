import React from 'react'
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from '../../utils/context/ThemeProvider';
import { useTheme } from '../../utils/context/useTheme'

export const Theme = () => {

  const { theme, change} = useTheme();

  return (
    <div >
      <div className='text-white'>
        {theme}
        <button onClick={() => change(THEME_LIGHT)}>Light</button>
        <button onClick={() => change(THEME_DARK)}>Dark</button>
        <button onClick={()=>change(THEME_NEITRAL)}>Neitral</button>
      </div>

    </div>
  )
}
