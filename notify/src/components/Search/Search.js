import React from 'react'
import './Search.css'
const Search = ({ handleSerachNote }) => {
  return (
    <div className="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-search"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#f3e8cc"
        fontWeight="800"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
      <input
        onChange={(event) => {
          handleSerachNote(event.target.value)
        }}
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default Search
