import React from 'react';

import axios, { AxiosError } from 'axios';

import { BASE_URL, getItemId } from '../../utils/service/api';
import {Peoples, IFilm} from '../../types/Interfaces'
import { categorySeatchSelector } from '../../assets/json';
import { CategorySelect } from '../../components/UI/select/CategorySelect';
import { SearchItem } from '../../components/Search/SearchItem';
import {useDebounce} from '../../utils/service/debounce';
import { Input } from '../../components/UI/input/Input';

export interface FoundItem {
  id: string;
  name?: string;
  title?: string;
  category: string;
}

type SearchItem = Peoples & IFilm;

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

  const debouncedSearch = useDebounce(search, 300);

  React.useEffect(() => {
    getSearchItem(debouncedSearch)
    if (debouncedSearch) getSearchItem(debouncedSearch)
  }, [debouncedSearch]);
    
  const handleSearch = (item: string) => {
    setSearch(item)
    // getSearchItem(item)
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
       
        <Input
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />        
      </div>

      <SearchItem searchItems={foundItems} />
      
    </div>
  )
};
