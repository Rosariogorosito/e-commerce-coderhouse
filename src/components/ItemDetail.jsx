import React from 'react';
import ItemCount from './Item/ItemCount';
import "../styles/itemDetail.css"

const ItemDetail = ({ detail }) => {
    return (
        <div className="card-detail-container">
            <div className="card-detail">
                <img src={detail.image} alt={detail.name} className="item-detail-image" />
                <h2 className="title-detail" >{detail.name}</h2>
                <p className="text-detail"> {detail.description}</p>
                <p className="price-detail">Precio: ${detail.price}</p>
                <ItemCount prod={detail} />
            </div>
        </div>
    );
};

export default ItemDetail;
