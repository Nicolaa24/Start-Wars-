import React from 'react'

interface Props {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  categorySeatchSelector: {
    value: string;
    name: string;
  }[];
}

export const CategorySelect:React.FC<Props> = ({selectedCategory, setSelectedCategory,categorySeatchSelector}) => {
  return (
    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option disabled value="">
              {" "}
              Categories
            </option>
            {categorySeatchSelector.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
  )
}
