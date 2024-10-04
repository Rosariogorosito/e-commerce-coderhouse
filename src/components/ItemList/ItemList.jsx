import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/itemList.css';  

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <div key={product.id} className="item-list-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <Link to={`/product/${product.id}`}>
            <button>Ver detalles</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
