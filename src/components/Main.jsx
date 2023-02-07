import React from "react";
import "../Styles/main.scss";

import { useState, useEffect } from "react";
import { fetchApi } from "../utilis/fetchApi";
import { MainCard, Loading, SideBar } from "/";

function Main() {
  ///React//
  const [books, setBooks] = useState();
  const [category, setCategory] = useState("comedy");
  const [loading, setLoading] = useState(false);
  //React///

  /*In this main component we call the data for certain category,
  in this component we also have two child components, in those components
  it is possible to change the categories in the
  <Sidebar/> component and display the received data in the <MainCard/>*/

  // Fetch api for certain category //
  useEffect(() => {
    setLoading(true);
    fetchApi(`week/${category}/18`).then((data) => {
      setLoading(false);
      setBooks(data);
    });
  }, [category]);

  // Fetch api for certain category //

  return (
    <div className="main">
      <SideBar category={category} setCategory={setCategory} />
      {loading ? <Loading /> : <MainCard books={books} />}
    </div>
  );
}

export default Main;
