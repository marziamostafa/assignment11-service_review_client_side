import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const MyReviews = () => {

    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useTitle('My Reviews')


    const review = {
        message: ""
    }
    useEffect(() => {
        fetch(`https://b6a11-service-review.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('foodieToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email])




    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            fetch(`https://b6a11-service-review.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                        const remaining = reviews.filter(rev => rev._id !== id)
                        setReviews(remaining)
                    }
                })
        }
    }

    // const handleStatus = (id) => {

    //     console.log(id)
    //     fetch(`https://b6a11-service-review.vercel.app/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'Approved' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 const remaining = reviews.filter(rev => rev._id !== id)
    //                 const approving = reviews.find(rev => rev._id === id)
    //                 approving.status = {};
    //                 approving.status = 'Approved';

    //                 const newOrders = [approving, ...remaining];
    //                 setReviews(newOrders);
    //             }
    //         })
    // }

    return (
        <div>
            <h2>You have {reviews.length} Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th className='text-center'>Name</th>
                            <th>Email</th>
                            <th>Food Item</th>
                            <th>Comment</th>
                            <th>Update Review</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.length === 0 ?
                                <>

                                    <div className='flex justify-center'>
                                        <h1 className='text-4xl font-bold'>No reviews were added</h1>
                                    </div>
                                </>
                                :
                                < div >
                            reviews?.map(review => <ReviewRow
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                    // handleStatus={handleStatus}
                                    ></ReviewRow>)
                                </div>

                        }

                    </tbody>

                </table>
            </div>
        </div >
    )
};

export default MyReviews;