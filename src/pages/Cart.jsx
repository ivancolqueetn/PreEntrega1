
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    
    const cartItem = localStorage.getItem('cartItems');
    const itemParse = JSON.parse(cartItem);

    if (itemParse) {
      setCartItems(itemParse);
    }
  }, []);

  return (
    <div>
      <h1>Carrito</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div><Card.Img  variant="top" src={item.image} style={{ width: '250px', height: '250px' }} /></div>
            <div><p>{item.title}</p>
            <p>{item.description}</p>
            <p>cantidad: {item.cantidad}</p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Cart;