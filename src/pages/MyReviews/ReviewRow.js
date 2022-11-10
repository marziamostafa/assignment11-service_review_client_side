import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { UserCircleIcon } from '@heroicons/react/24/solid'


const ReviewRow = ({ review, handleDelete, handleStatus }) => {
    const { _id, serviceName, customer, price, service, phone, status, message, image, email } = review
    const [reviewService, setReviewService] = useState({})

    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-marziamostafa.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))

    }, [service])
    console.log(service, _id)

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



                {/* The button to open modal */}
                {/* <label htmlFor="my-modal" className="btn btn-ghost btn-xs">Edit</label> */}

                {/* Put this part before </body> tag */}
                {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">

                        <form onSubmit={() => handleStatus(_id)} >
                            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                                <input name='firstName' type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                                <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost w-full input-bordered" />
                                <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered" required />
                                <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                            </div>
                            <textarea name='message' className="textarea textarea-bordered h-24 w-full my-4" placeholder="Your message"></textarea>
                        </form>

                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Update!</label>
                        </div>
                    </div>
                </div> */}


            </th>
        </tr>
    )
};

export default ReviewRow;
// () => handleStatus(_id)