import axios, {AxiosError} from 'axios';
import React from 'react'
import { BASE_URL, getItemId } from '../utils/service/api';
import {Peoples, Film} from '../types/Interfaces'
import { categorySeatchSelector } from '../assets/json';
import { CategorySelect } from '../components/UI/select/CategorySelect';

interface FoundItem {
  id: string;
  name?: string;
  title?: string;
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
          title: item.title
        }
      })
      setFoundItems(searchingResults)

    } catch (e: unknown) {
      const error = e as AxiosError;
      console.log(error)
    }
  }
  
  React.useEffect(() => {
    getSearchItem(search)
  }, [search])

  const handleSearch = (item: string) => {
    setSearch(item)
  }

  return (
    <div className='h-screen bg-black'>
      <h1 className='text-white'>Search</h1>
      <div>
        <CategorySelect
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categorySeatchSelector={categorySeatchSelector}
        />
      </div>
      <input
        type='text'
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className='text-white'>
        {foundItems.map(item => (
          <div key={Math.random()}>{item.name ? item.name : item.title}</div>
        ))}
      </div>
    </div>
  )
};
