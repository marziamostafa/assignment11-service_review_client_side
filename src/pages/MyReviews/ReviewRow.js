import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { UserCircleIcon } from '@heroicons/react/24/solid'

const ReviewRow = ({ review, handleDelete, }) => {
    const { _id, serviceName, customer, price, service, phone, status, message, image, email, } = review
    const [reviewService, setReviewService] = useState({})

    const [upmsg, setUpmsg] = useState(review)



    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-marziamostafa-marziamostafa.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviewService(data))

    }, [user?.email])

    console.log(review)

    const handleStatus = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;

        console.log(message)

        const newMsg = message;
        fetch(`https://b6a11-service-review-server-side-marziamostafa-marziamostafa.vercel.app/reviews${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.acknowledged) {
                //     alert('A new Service Added successfully')
                //     form.reset();
                // }
            })
            .catch(err => console.error(err))
    }

    const handlechange = event => {
        const msg = event.target.value;
        console.log(msg)
        const upmsg = { ...review }
        upmsg.message = upmsg
    }
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
                        <div className="rounded w-20 h-24">
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
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}

            </td>

            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{message}</td>
            <th>
                {/* <button onClick={() => handleStatus(_id)} className="btn btn-ghost btn-xs">
                    {
                        status ?
                            status : 'Update'
                    }
                </button> */}

                <label htmlFor="my-modal" className="btn btn-ghost btn-xs">Edit</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleStatus} >
                            <textarea onChange={handlechange} name='message' className="textarea textarea-bordered h-24 w-full my-4" placeholder="Your message"></textarea>
                            <div className="modal-action">
                                <label htmlFor="my-modal" type="submit" className="btn">Submit</label>
                            </div>

                        </form>

                    </div>
                </div>
            </th>
        </tr>
    )
};

export default ReviewRow;