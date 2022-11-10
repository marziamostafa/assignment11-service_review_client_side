import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description } = service


    return (
        <div className="card card-compact w-96 shadow-xl bg-lime-100">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img className='cardImage' src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price} BDT</p>
                <p>{description.slice(0, 100)}</p>

                <div className="card-actions justify-center container">
                    <button className="btn btn-active"><Link to={`/allservices/${_id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;