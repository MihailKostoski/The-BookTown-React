import React from "react";
import "../Styles/item.scss";
function Item({ item }) {
  return (
    <div className="item-container">
      <img src={item.cover} alt={item.name} width={35} height={35} />
      <p>{item.name}</p>
    </div>
  );
}

export default Item;
