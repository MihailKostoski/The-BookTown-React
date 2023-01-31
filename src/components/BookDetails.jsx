import React from 'react'
import "../Styles/bookDetails.scss"
import { useParams } from 'react-router-dom';
import { useState ,useEffect} from 'react'
import { fetchApi } from '../utilis/fetchApi'

function BookDetails() {
  
    const [bookID, setBookID] = useState()
    let {id} = useParams()
console.log(bookID)
    useEffect(() => {
        fetchApi(`book/${id}`).then((data) => setBookID(data))
      
    }, [id])

   
    console.log(bookID, 'hhhii')
   
    
    
    return (
    <div className='main-book-container'>
        <div className='book-container-1'>
            <div className='book-cover'>
                <img   src={bookID?.cover} alt={bookID?.name} />
            </div>
            <div className="book-details">
                <div className='book-author'>{bookID?.name}</div>
                <div className='book-title'>{bookID?.authors}</div>

              
                </div>
           
            
        
           
            </div>
           
            <div className='second-book-container'>
            <div className='book-rating'>{ bookID?.rating}</div>
                <div className='book-synopsis'>
                    <p>{bookID?.synopsis}</p>
            </div>
                <div className='book-title'>{bookID?.published_date}</div>
            </div>
            </div>
  )
}

export default BookDetails
