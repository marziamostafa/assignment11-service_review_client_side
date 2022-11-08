import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description } = service


    return (
        <div className="card card-compact w-96 shadow-xl bg-lime-100">
            <figure><img className='cardImage' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price} BDT</p>
                <p>{description.slice(0, 100)}</p>

                <div className="card-actions justify-center container">
                    <button className="btn btn-active">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;