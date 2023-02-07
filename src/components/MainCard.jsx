import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "../Styles/mainCard.scss";

function MainCard({ books, setBooks }) {
  /////books and setBooks prop coming from parent component -- <Main/>
  if (!books?.length)
    return (
      <>
        <div
          style={{
            color: "red",
            fontSize: "1.1rem",
            position: "relative",
            left: "1rem",
            top: "1rem",
          }}
        >
          Search is temporarily unavailable. Use this time to read a book!
        </div>
      </>
    );

  return (
    <div className="main-card">
      {books.map((book) => (
        <Link key={book.book_id} to={`book/${book.book_id}`}>
          <div className="book-card ">
            <div className="img-div">
              <LazyLoadImage
                width="300"
                height="400"
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

export default MainCard;
