import axios, { AxiosError } from "axios";

export const BASE_URL = 'https://swapi.dev/api/';
export const IMG_URL = `https://starwars-visualguide.com/assets/img/characters/`;

export const getInfo = async (url:string, category:string,id:string | undefined, fn:React.Dispatch<React.SetStateAction<any>>) => {
    const res = await axios.get(`${url}${category}/${id}/`);
    await fn(res.data)
  }

export const getItemId = (url: string) => {
  const res = url.substring(url.length - 1, url.length - 3)
  if (res.substring(0,1) === '/') {
    return url.substring(url.length - 1, url.length - 2)
  }
  return res;
};