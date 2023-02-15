import React from "react";
import "./bookCard.scss";

import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
function BookCard({ bookID }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="main-book-container">
      <div className="first-book-container">
        <div className="book-rating">
          <p> Ratings {bookID?.rating}</p>
        </div>
        <div className="book-cover">
          <LazyLoadImage src={bookID?.cover} alt={bookID?.name} />
        </div>

        <div className="book-details">
          <div className="book-published">{bookID?.published_date}</div>
          <div className="book-title">{bookID?.name}</div>
          <div className="book-author">{bookID?.authors}</div>
        </div>
      </div>

      <div className="second-book-container">
        <div className="book-synopsis">
          <p>
            {showMore
              ? bookID?.synopsis.substring(0, 1200)
              : `${bookID?.synopsis.substring(0, 800)}`}
            <button
              className="btn-show-more"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more..."}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
