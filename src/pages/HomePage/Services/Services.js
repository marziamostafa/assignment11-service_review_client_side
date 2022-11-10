import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-marziamostafa.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-16'>
            <div className='text-center'>
                <p className="text-5xl text-red-600 font-semibold ">Manue Bar</p>
                <p className='text-sky-800 text-3xl'>Hey Foodie! Choose your favourites from here.</p>

            </div>
            <div className='hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {

                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="card-actions justify-center container">
                <button className="btn btn-outline"><Link to='/allservices'>View All</Link></button>
            </div>
        </div>
    );
};

export default Services;