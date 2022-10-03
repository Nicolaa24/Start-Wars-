import axios, { AxiosError } from "axios";

export const BASE_URL = 'https://swapi.dev/api/';
export const IMG_URL = `https://starwars-visualguide.com/assets/img/`;

export const getInfo = async (url: string, category: string, id: string | undefined, fn: React.Dispatch<React.SetStateAction<any>>) => {
  
  try {
    const res = await axios.get(`${url}${category}/${id}/`);
    await fn(res.data)
  } catch (e) {
    const err = e as AxiosError;
    console.log(err)
  }
   
};

export const getItemId = (url: string) => {
  const res = url.substring(url.length - 1, url.length - 3)
  if (res.substring(0,1) === '/') {
    return url.substring(url.length - 1, url.length - 2)
  }
  return res;
};


export const makeConcurrentRequest = async (url: string[]) => {
  
  const res = await Promise.all(url && url.map(res => {
    return fetch(res)
      .then(res => res.json())
  }))

  return res;
};


export const getCategoryLink = (categoryName: string) => {
    const name = categoryName
    if (name[categoryName.length - 1] === 's') {
      return name.substring(0, name.length - 1)
    }
    return name
  };

