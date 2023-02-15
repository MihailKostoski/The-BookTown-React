import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./mainCard.scss";

function MainCard({ books, setBooks }) {
  /////books and setBooks prop coming from parent component -- <Main/>

  if (!books?.length) {
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
  }

  return (
    <>
      <div className="main-card">
        {books.map((book) => (
          <div className="book-card " key={book.book_id}>
            <Link
              style={{ width: "100%", height: "100%" }}
              to={`book/${book.book_id}`}
            >
              <div className="img-div">
                <LazyLoadImage
                  width="300"
                  height="400"
                  src={book.cover}
                  alt={book.name}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainCard;
