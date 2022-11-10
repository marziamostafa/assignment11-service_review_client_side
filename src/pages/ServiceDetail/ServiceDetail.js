import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { UserCircleIcon } from '@heroicons/react/24/solid'

const ServiceDetail = () => {
    const { user } = useContext(AuthContext)


    const detail = useLoaderData();
    const { _id, img, title, description, ingredients, price
    } = detail
    // console.log(detail)

    const handleServiceReview = event => {
        event.preventDefault();

        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        // const img = `${user ? user.photoURL : <UserCircleIcon></UserCircleIcon>}`;
        const img = user?.photoURL
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(img)

        const review = {
            service: _id,
            serviceName: title,
            img,
            customer: name,
            phone,
            price,
            email,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Added successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }


    const handleReview = () => {

        alert('You have to log in at first')

    }
    return (
        <div>
            <div className="card w-full bg-orange-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title text-4xl">{title}</h2>
                    <p className='text-lg border border-red-400'>Price: {price} BDT</p>
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

            <div className='my-16 '>
                <form onSubmit={handleServiceReview}>
                    <h2 className="text-4xl card-actions justify-center container">Add Review for: {title}</h2>
                    <h4 className="text-md card-actions justify-center container my-4 ">How much did you like it!! Please drop your opinion.</h4>
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='firstName' type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                        <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered" required />
                        <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                    </div>

                    <textarea name='message' className="textarea textarea-bordered h-24 w-full my-4" placeholder="Your message"></textarea>
                    <div className='card-actions justify-center container '>
                        {
                            user?.email ?
                                <>
                                    <input className='btn btn-active text-center' type="submit" value="Submit Review" />
                                </>
                                :
                                <>
                                    <div className='grid grid-cols-1'>
                                        <Link to='/login' className='text-red-500'>Log in to submit review</Link>
                                        <input onClick={handleReview} className='btn btn-active text-center' type="submit" value="Submit Review" />
                                    </div>
                                </>
                        }

                    </div>

                </form>
            </div>
        </div>
    );
};

export default ServiceDetail;
