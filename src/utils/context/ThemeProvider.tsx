import React from 'react';
import { ThemeContext } from "./ThemeContext";

interface ThemeProvider {
  children: React.ReactNode
}

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL= 'neitral';

export const ThemeProvider: React.FC<ThemeProvider> = ({ children }) => {

  const [theme, setTheme] = React.useState<string | null>(null);

  const change = (theme:string) => {
    setTheme(theme)
  }

  const value = {
    theme,
    change
  }

  return <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
}