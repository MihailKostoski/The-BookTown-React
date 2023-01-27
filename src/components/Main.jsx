import React from 'react'
import "../Styles/main.scss"

import { useState, useEffect } from 'react'
import { fetchApi } from '../utilis/fetchApi'
import {MainCard} from '/';
import { SideBar } from "/";




  
  

    



function Main() {

  const [books, setBooks] = useState()
  const [category, setCategory] = useState('comedy')
  

  
  useEffect(() => {
    fetchApi(`week/${category}/12`).then((data) => setBooks(data))
   },[category]);
   

   console.log(books)
  return (
    <div className="main">
         <SideBar category={category} setCategory={setCategory} />
        <MainCard books={ books } />
    </div>
  )
}

export default Main
