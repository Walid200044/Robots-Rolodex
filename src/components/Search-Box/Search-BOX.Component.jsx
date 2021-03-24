import React from 'react'
import './Search-Box.style.css'


export const SearchBox= ({handleChange})=>(
    <input className="search"
          type="search"
          placeholder="search robot"
          onChange={handleChange}
        />

);