import axios, { AxiosError } from "axios";

export const BASE_URL = 'https://swapi.dev/api/';

export const getInfo = async (url:string, category:string,id:string | undefined, fn:React.Dispatch<React.SetStateAction<any>>) => {
    const res = await axios.get(`${url}${category}/${id}/`);
    await fn(res.data)
  }

