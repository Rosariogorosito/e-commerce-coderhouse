import React, { useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import "../../styles/itemCount.css";

const ItemCount = ({ prod, stock }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useCartContext();

  const increment = () => {
    if (count < stock) {
      setCount(prevCount => prevCount + 1);  
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart({ ...prod, quantity: count });
      console.log(`Se agregó ${count} de ${prod.name} al carrito`);
    }
  };

  return (
    <div className="counter-container">
      <div className="counter-wrapper">
        <button className="counter-button" onClick={decrement}>-</button>
        <span className="counter-display">{count}</span>
        <button className="counter-button" onClick={increment}>+</button>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Añadir {count} al carrito
      </button>
    </div>
  );
};

export default ItemCount;
