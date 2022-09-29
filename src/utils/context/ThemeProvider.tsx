import React from 'react';
import { ThemeContext } from "./ThemeContext";
import spaceStation from '../../assets/images/icons/space-station.svg';
import droid from '../../assets/images/icons/droid.svg';
import lightsaber from '../../assets/images/icons/lightsaber.svg';


interface ThemeProvider {
  children: React.ReactNode
}

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL= 'neitral';

export const ThemeProvider: React.FC<ThemeProvider> = ({ children }) => {

  const [theme, setTheme] = React.useState<string | null>(null);
  const [color, setColor] = React.useState("black");
  const [icon, setIcon] = React.useState<string>(spaceStation);
  
  const change = (theme:string) => {
    setTheme(theme)
  }

   React.useEffect(() => {
    switch (theme) {
      case THEME_LIGHT:
        setColor('indigo-600'),
        setIcon(lightsaber);
        break;
      case THEME_DARK:
        setColor('orange-900'),
        setIcon(spaceStation);
        break;
      case THEME_NEITRAL:
        setColor('black'),
        setIcon(droid);
        break;
      default: setColor(color);
        break;
    }
  }, [theme]);

  const value = {
    theme,
    change,
    color,
    icon
  }

  return <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
}