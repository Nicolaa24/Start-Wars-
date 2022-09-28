import React from "react";

export interface ThemeContext {
  theme: string | null;
  change: (theme: string ) => void;
}

export const ThemeContext = React.createContext({
  theme: 'dark',
  change: () => { },
} as ThemeContext);