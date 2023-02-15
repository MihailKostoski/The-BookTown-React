import React from "react";
import "./search.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { fetchApi } from "../../../utilis/fetchApi";

function Search() {
  ///React and react-router///
  const [booksByName, setBooksByName] = useState();
  const { bookName } = useParams();
  ///React and react-router///

  console.log(bookName);

  //Fetch api for books searched by name in <SearchBar/> component
  useEffect(() => {
    fetchApi(`search/${bookName}`).then((data) => setBooksByName(data));
  }, [bookName]);
  console.log(booksByName);
  console.log("DADADA");
  //------------///

  return (
    <div className="main-card-name">
      <div style={{ position: "absolute", color: "grey" }}>
        Result for <span style={{ color: "white" }}>{bookName}</span>
      </div>
      {booksByName?.map((book) => (
        <Link key={book?.book_id} to={`../book/${book?.book_id}`}>
          <div className="book-card-name ">
            <div className="book-card-img-div">
              <LazyLoadImage
                className="search-image"
                width={120}
                height={180}
                src={book.cover}
                alt={book.name}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Search;
