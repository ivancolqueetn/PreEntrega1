import React, { useEffect } from 'react'
import { useState } from 'react'
import { addCantidad, addToCart, deleteItem, restCantidad } from '../utils/addToCart'

const RenderProduct = ({item, isCart=false, getItems}) => {
    const [counter,setCounter] = useState(1)
    function handleClick(){
      const itemActual = {...item,cantidad:counter}
        addToCart(itemActual)
        if(isCart){
            getItems()
        }
    }
    function handleClickDelete(){
        deleteItem(item)
        getItems()
    }

  return (
    
    <div>

        <h5>{item.title}</h5>
        <img src={item.image} className="item_detail_image" alt="" />
        <p>{item.description}</p>
        <p>price: {item.price}</p>
        <p>category: {item.category}</p>
        <p>stock: {item.rating.count}</p>
        {isCart&&<p >cantidad: {item.cantidad}</p>}
        <p>valoracion: {item.rating.rate}</p>
        {isCart&&<p>precio total: {item.price*item.cantidad}</p>}
        <div>
            <button onClick={() => {
            if(counter <= 1 && !isCart){
                return
            }
            setCounter(counter-1)
            if(isCart){
                restCantidad(item)
                getItems()
            }
            }}>-</button>
            {!isCart&&<span>{counter}</span>}
            <button onClick={() => {
            setCounter(counter+1)
            if(isCart){
                addCantidad(item)
                getItems()
            }
            }}>+</button>
        </div>
        {!isCart&&<button onClick={handleClick}>agregar</button>}
        {isCart&&<button onClick={handleClickDelete}>eliminar</button>}
    </div>
  )
}

export default RenderProduct