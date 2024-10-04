import React from 'react';
import ItemCount from './Item/ItemCount';
import "../styles/itemDetail.css";
import BackButton from './BackButton';

const ItemDetail = ({ detail }) => {

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    return (
        <>
            <BackButton />
            <div className="card-detail-container">
                <div className="card-detail">
                    <img src={detail.image} alt={detail.name} className="item-detail-image" />
                    <h2 className="title-detail">{detail.name}</h2>
                    <p className="text-detail">{detail.description}</p>
                    <p className="price-detail">Precio: {formatCurrency(detail.price)}</p>
                    <ItemCount prod={detail} stock={detail.stock} />
                </div>
            </div>
        </>

    );
};

export default ItemDetail;
