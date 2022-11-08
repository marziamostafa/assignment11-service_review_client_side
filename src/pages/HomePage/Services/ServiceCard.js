import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, ingredients, description } = service

    const sliced = description.slice(0, 100);
    // console.log(sliced)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='cardImage' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price} BDT</p>
                <p>{description.slice(0, 100)}</p>

                <div className="card-actions justify-center container">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;