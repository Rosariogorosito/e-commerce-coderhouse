import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../../styles/itemListContainer.css";
import { getProducts } from '../../firebase/db'

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getProducts(setProducts).then(() => {
      setLoading(false); 
    });
  }, [id]);

  return (
    <div>
      {loading ? ( 
        <p>Cargando productos...</p>
      ) : (
        <div className="cards-container">
          {products.length > 0 ? ( 
            products.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.name} className="card-image" />
                <h2 className="card-title">{product.name}</h2>
                <p className="card-description">{product.description}</p>
                <p>{product.price}</p>
                <div className="card-footer">
                  <Link to={`/product/${product.id}`}>
                    <button className="view-details">Ver detalles</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No hay productos disponibles.</p> 
          )}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
