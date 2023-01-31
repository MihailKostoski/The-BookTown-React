import React from 'react'
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

    function SearchField() {
 
    const [bookSearch, setBookSearch] = useState('')
    const navigate = useNavigate();
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      if (bookSearch) {
        navigate(`/search/${bookSearch}`);
  
       setBookSearch('')
      }
    };



  return (
    <div>
          <form onSubmit={onSubmit}>
              <input 
              
                 className='search-bar'
                 placeholder='Search...'
                 value={bookSearch}
                 onChange={(e) => setBookSearch(e.target.value)}
               />
     </form>
    </div>
  )
}

export default SearchField
