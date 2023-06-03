import React from 'react'
import {BsSearch} from 'react-icons/bs'

function Searchbar({searchitem, HandleSearch}) {
  return (
    <div className='navbar-searchcontainer' >
          <input className='navbar-search ' type='search' id="search" value={searchitem} placeholder='Search' onChange={HandleSearch} />
          <BsSearch className='navbar-search-icon' />
        </div>
  )
}

export default Searchbar
