import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const detail = useLoaderData();
    const { _id, img, title, description, ingredients
    } = detail
    console.log(detail)
    return (
        <div>
            <div className="card w-full bg-orange-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title text-4xl">{title}</h2>
                    <div className="card-body">
                        <h2 className="card-title">Ingredients:</h2>
                        <p className='sm:w-full'>{ingredients}</p>

                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Recipe:</h2>
                        <p className='sm:w-full'>{description}</p>

                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
{/* <div className="card-body">
    <h2 className="card-title">Recipe:</h2>
    <p className='sm:w-full'>{description}</p>

</div> */}