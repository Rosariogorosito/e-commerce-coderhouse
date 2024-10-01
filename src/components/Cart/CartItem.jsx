import React from 'react';

const CartItem = ({ item, removeItem }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price} x {item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
    );
};

export default CartItem;

