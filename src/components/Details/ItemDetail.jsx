import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div>
      <h5>{item.title}</h5>
      <img src={item.image} alt="" />
      <p>{item.description}</p>
      <p>price: {item.price}</p>
      <p>category:{item.category}</p>
    </div>
  )
}

export default ItemDetail