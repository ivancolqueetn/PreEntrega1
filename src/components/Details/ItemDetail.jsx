import React, { useState } from "react";
import { addToCart } from "../utils/addToCart";
import RenderProduct from "../Render/renderProduct";

const ItemDetail = ({ item }) => {
 
  return (
    <div>
        <RenderProduct item={item}/>
    </div>
  );
};

export default ItemDetail;
