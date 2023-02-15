import React from "react";
import "./main.scss";

import { useState, useEffect } from "react";
import { fetchApi } from "../../utilis/fetchApi";

import MainCard from "./MainCard/MainCard";
import Loading from "../Loading/Loading";
import SideBar from "../Sidebar/SideBar";

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
    fetchApi(`week/${category}/28`).then((data) => {
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
