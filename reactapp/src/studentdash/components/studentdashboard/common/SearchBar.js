import React from 'react'
// import {BsSearch} from 'react-icons/bs'

function Searchbar({ searchitem, HandleSearch }) {
  return (
    <div className='navbar-searchcontainer' >
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-2 w-3 fill-slate-300" viewBox="0 0 20 20">img</svg>
        </span>
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for..." type='search' id="search" value={searchitem} onChange={HandleSearch} />
      </label>
    </div>
  )
}

export default Searchbar
