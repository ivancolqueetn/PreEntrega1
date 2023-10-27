import React, { useState } from "react";
import { addToCart } from "../utils/addToCart";

const ItemDetail = ({ item }) => {
  const [counter,setCounter] = useState(1)
  function handleClick(){
    const itemActual = {...item,cantidad:counter}
      addToCart(itemActual)
  }
  return (
    <div>
      <h5>{item.title}</h5>
      <img src={item.image} className="item_detail_image" alt="" />
      <p>{item.description}</p>
      <p>price: {item.price}</p>
      <p>category:{item.category}</p>
      <p>{item.rating.count}</p>
      <p>{item.rating.rate}</p>
      <div>
        <button onClick={() => {
          if(counter <= 1){
            return
          }
          setCounter(counter-1)
        }}>-</button>
        <span>{counter}</span>
        <button onClick={() => {
          setCounter(counter+1)
        }}>+</button>
      </div>
      <button onClick={handleClick}>agregar</button>
    </div>
  );
};

export default ItemDetail;
