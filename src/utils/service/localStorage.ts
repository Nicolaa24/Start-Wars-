import { localStorageData } from "../../types/Interfaces";

export const getLocalStorage = (key:string) => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    return JSON.parse(data);
  }

  return {favorites: []}
};

export const setLocalStorage = (key:string, data:localStorageData) => {
  localStorage.setItem(key, JSON.stringify(data))
};