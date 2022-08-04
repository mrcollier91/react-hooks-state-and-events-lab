import React, {useState} from "react";
import Item from "./Item";



function ShoppingList({ items }) {
  const  [selectedCategory, setSelect] = useState("All")
 
  // console.log(selectedCategory)
  console.log(selectedCategory)
  function changeCategory(e) {
    setSelect(e.target.value)
   
  }
  let newItems = items.filter((itemsObj)=>{
    if (selectedCategory === "All"){
      return true
    }
    return itemsObj.category === selectedCategory
  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
