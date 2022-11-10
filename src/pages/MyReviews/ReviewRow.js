import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { UserCircleIcon } from '@heroicons/react/24/solid'

const ReviewRow = ({ review, handleDelete, handleStatus }) => {
    const { _id, serviceName, customer, price, service, phone, status, message, image, email } = review
    const [reviewService, setReviewService] = useState({})

    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviewService(data))

    }, [user?.email])

    console.log(reviewService.img)

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-20 h-20">
                            {
                                reviewService?.email ?
                                    <img src={reviewService?.img} alt="Avatar Tailwind CSS Component" />
                                    :
                                    <UserCircleIcon></UserCircleIcon>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">Phone: {phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}

            </td>

            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">$ {price}</span>
            </td>
            <td>{message}</td>
            <th>
                <button onClick={() => handleStatus(_id)} className="btn btn-ghost btn-xs">
                    {
                        status ?
                            status : 'Update'
                    }
                </button>
            </th>
        </tr>
    )
};

export default ReviewRow;