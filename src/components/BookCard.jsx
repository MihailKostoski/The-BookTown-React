import React from "react";
import "../Styles/bookCard.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
function BookCard({ bookID }) {
  return (
    <div className="main-book-container">
      <div className="first-book-container">
        <div className="book-cover">
          <LazyLoadImage src={bookID?.cover} alt={bookID?.name} />
        </div>

        <div className="book-details">
          <div className="book-author">{bookID?.name}</div>
          <div className="book-title">{bookID?.authors}</div>
        </div>
      </div>

      <div className="second-book-container">
        <div className="book-rating">{bookID?.rating}</div>
        <div className="book-synopsis">
          <p>{bookID?.synopsis.slice(0, 3000)}</p>
        </div>
        <div className="book-title">{bookID?.published_date}</div>
      </div>
    </div>
  );
}

export default BookCard;
