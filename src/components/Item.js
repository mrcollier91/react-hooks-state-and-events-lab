import React, {useState} from "react";


function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
function addToCart() {
   setCart((inCart) => !inCart)
}
const liClass = inCart ? "in-cart" : ""
const btnText = inCart ? "Remove From Cart" : "Add to Cart"

// console.log(category)
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{btnText}</button>
    </li>
  );
}

export default Item;
