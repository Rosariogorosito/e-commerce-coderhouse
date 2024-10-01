import React, { useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import "../../styles/itemCount.css"

const ItemCount = ({ prod }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useCartContext()

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-wrapper">
        <button className="counter-button" onClick={decrement}>-</button>
        <span className="counter-display">{count}</span>
        <button className="counter-button" onClick={increment}>+</button>
      </div>
      <button className="add-to-cart-button" onClick={() => addToCart({ ...prod, quantity: count })}>
        Añadir al carrito
      </button>
    </div>

  );
};

export default ItemCount;
