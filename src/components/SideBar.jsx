import React from "react";
import "../Styles/sidebar.scss";
import { useState } from "react";
import { categories } from "../utilis/category";

function SideBar({ setCategory }) {
  //SetCategory prop coming from parent component -- <Main/>

  //React///
  const [searchTerm, setSearchTerm] = useState("");
  //React///

  ///// -> Sidebar search functionality
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCategory(searchTerm);
    setSearchTerm("");
  };

  ///// <-end//

  return (
    <div className="sidebar">
      <div className="sidebar-logo">Category</div>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search "
          value={searchTerm}
          onChange={onChange}
        />
      </form>

      {categories.map((category) => (
        <button
          onClick={() => setCategory(category.name)}
          className="category-btn"
          key={category.name}
        >
          <span className="category-name">{category.name}</span>
        </button>
      ))}
    </div>
  );
}

export default SideBar;
