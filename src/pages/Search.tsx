import axios, {AxiosError} from 'axios';
import React from 'react'

import { debounce } from 'lodash';

import { BASE_URL, getItemId } from '../utils/service/api';
import {Peoples, Film} from '../types/Interfaces'
import { categorySeatchSelector } from '../assets/json';
import { CategorySelect } from '../components/UI/select/CategorySelect';
import { SearchItem } from '../components/Search/SearchItem';

export interface FoundItem {
  id: string;
  name?: string;
  title?: string;
  category: string;
}

type SearchItem = Peoples & Film;

export const Search = () => {

  const [search, setSearch] = React.useState('');
  const [foundItems, setFoundItems] = React.useState<FoundItem[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const getSearchItem = async (param: string) => {
    try {
      const res = await axios.get(`${BASE_URL}${selectedCategory}/?search=${param}`);
    
      const searchingResults = res.data.results.map((item: SearchItem) => {
        const id = getItemId(item.url);
        
        return {
          id,
          name: item.name,
          title: item.title,
          category: selectedCategory
        }
      })
      setFoundItems(searchingResults)

    } catch (e: unknown) {
      const error = e as AxiosError;
      console.log(error)
    }
  }
  
  // React.useEffect(() => {
  //   getSearchItem('')
  // }, []);

  //FIX AND SPREAD FNC DEBOUNCE
  // const debounceGetResponse = React.useCallback(
  //   debounce((value: string) => getSearchItem(value), 300),
  //   []
  // );
  
  const handleSearch = (item: string) => {
    setSearch(item)
    getSearchItem(item)
  }

  return (
    <div className='h-screen bg-black flex flex-col'>
      <h1 className='text-yellow-300 text-2xl font-bold  my-4 mx-7'>
        Search
      </h1>
      <div className='flex flex-row mx-5'>
        <CategorySelect
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categorySeatchSelector={categorySeatchSelector}
        />
        <input
        className='outline-none mx-7 rounded-sm p-1'
        type='text'
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      </div>

      <SearchItem searchItems={foundItems} />   
      
    </div>
  )
};
