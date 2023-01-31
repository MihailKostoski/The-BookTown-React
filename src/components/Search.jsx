import React from 'react'
import { useParams, Link} from "react-router-dom";
import { useEffect } from 'react'
import { useState } from 'react'

import { fetchApi } from '../utilis/fetchApi'



function Search() {
  


  const [singleBooks, setSingleBooks] = useState(null);
  const { bookName } = useParams();
  
  useEffect(() => {
    fetchApi(`search/${bookName}`)
      .then((data) => setSingleBooks(data))
  }, [bookName]);
  
  console.log(singleBooks)
    
    

  return (
    <div>
      Search Results for <span style={{ color: "#FC1503" }}>{bookName}</span> videos

      {singleBooks?.map((single) => (
         <Link key={single.book_id}   to={`../book/${single.book_id}`} >
        
              <div  className="book-card ">
                 <div className='img-div'> 
             <img width="160" height="200" src={single.cover} alt={single.name} />
             </div>
           <h1>{single.name}</h1>
          
           
       
            
                 
              </div>
              </Link>
            
       ))}
    </div>
  )
}

export default Search
