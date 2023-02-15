import React from "react";

import Loading from "../Loading/Loading";
import BookCard from "./BookCard/BookCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchApi } from "../../utilis/fetchApi";

function BookDetails() {
  const [bookID, setBookID] = useState();

  const [loading, setLoading] = useState(false);

  let { id } = useParams();
  console.log(bookID);
  useEffect(() => {
    setLoading(true);
    fetchApi(`book/${id}`).then((data) => {
      setLoading(false);
      setBookID(data);
    });
  }, [id]);

  console.log(bookID, "hhhii");

  return <>{loading ? <Loading /> : <BookCard bookID={bookID} />}</>;
}

export default BookDetails;
