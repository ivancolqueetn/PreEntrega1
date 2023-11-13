
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import RenderProduct from '../components/Render/renderProduct';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate()
  function getItems(){
    const cartItem = localStorage.getItem('cartItems');
    const itemParse = JSON.parse(cartItem);

    if (itemParse) {
      setCartItems(itemParse);
    }
  }

  function handleClickBuy(){
      navigate('/Comprar')
  }


  useEffect(() => {
    
    const cartItem = localStorage.getItem('cartItems');
    const itemParse = JSON.parse(cartItem);

    if (itemParse) {
      setCartItems(itemParse);
    }
  }, []);
    console.log(cartItems)

    

  return (
    <div>
      <h1>Carrito</h1>
      <button onClick ={handleClickBuy}>comprar</button>
      <div>
        {cartItems.map((item) => {
          console.log(item.cantidad)
          return <RenderProduct getItems={getItems} isCart={true} key={item.id} item={item}/>
        })}
      </div>

    </div>
  );
}

export default Cart;