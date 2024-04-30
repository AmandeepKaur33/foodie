import React from 'react'

const SearchNews = ({list}) => {
  return (
    <button className='px-5 py-1 bg-indigo-500 text-white text-xl font-semibold'>{list.name}</button>
  )
}

export default SearchNews