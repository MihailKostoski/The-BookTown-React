import React from 'react'
import "../Styles/mainCard.scss"














function MainCard({books, setBooks}) {
  if(!books?.length) return 'hola'

    return (
      
      <div className="main-card">
        
       {books.map((book) => (
              <div  className="book-card "key={book.book_id}>
                 <div className='img-div'> 
             <img width="160" height="200" src={book.cover} alt={book.name} />
             </div>
           <h1>{book.name}</h1>
           
           <button className='addToCart'>Add To Cart</button>
         
            
                 
              </div>
            
            
       ))}
      
    </div>
  )
}

export default MainCard
