import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProducts } from '../../firebase/db';
import ItemDetail from '../ItemDetail';

function ItemDetailContainer () {
    const [detail, setDetail] = useState(null);
    const { id } = useParams(); 
  
    useEffect(() => {
      getSingleProducts(id, setDetail)
    }, [id]);
  
    return (
        <div className="item-detail-container">
            {detail ? (
                <ItemDetail detail={detail} /> 
            ) : (
                <p>Cargando...</p> 
            )}
        </div>
    );
  };
  
  export default ItemDetailContainer;