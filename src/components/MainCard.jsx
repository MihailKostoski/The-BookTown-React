import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/mainCard.scss"



function MainCard({books, setBooks}) {
  if(!books?.length) return 'hola'

    return (
      
      <div className="main-card">
    
        {books.map((book) => (
         <Link key={book.book_id} to={`book/${book.book_id}`}>
              <div  className="book-card ">
                 <div className='img-div'> 
             <img width="160" height="200" src={book.cover} alt={book.name} />
             </div>
           <h1>{book.name}</h1>
          
           
       
            
                 
              </div>
              </Link>
            
       ))}
      
      
    </div>
  )
}

export default MainCard
