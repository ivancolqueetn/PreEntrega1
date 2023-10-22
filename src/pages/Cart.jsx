import React, { useEffect } from 'react'
import ItemDetailContainer from '../components/Details/ItemDetailContainer'
import { useParams } from 'react-router-dom'
import useFetch from '../components/Hooks/useFetch'


const Cart = () => {  
  useEffect (() => {
    const cartItem = localStorage.getItem('cartItems')
    const itemParse = JSON.parse(cartItem)
    console.log(itemParse,"cart")
  },[])
  return (
    // <div><ItemDetailContainer /></div>
    <h1>Cart</h1>
  )
}

export default Cart