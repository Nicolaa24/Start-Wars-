import React from "react";

export interface ThemeContext {
  theme: string | null;
  change: (theme: string) => void;
  color: string;
  icon:string
}

export const ThemeContext = React.createContext({
  theme: 'dark',
  change: () => { },
  color: 'black',
  icon: ''
} as ThemeContext);