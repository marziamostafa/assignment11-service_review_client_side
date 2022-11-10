import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {

    const { user } = useContext(AuthContext)

    useTitle('Add Service')


    const handleServiceReview = event => {
        event.preventDefault();



        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const ingredient = form.ingredients.value;
        const recipe = form.recipe.value;

        console.log(name,
            price,
            image,
            ingredient,
            recipe
        )


        const updatedInfo = {
            title: name,
            price: price,
            img: image,
            ingredients: ingredient,
            description: recipe

        }
        console.log(updatedInfo
        )



        fetch('https://b6a11-service-review-server-side-marziamostafa-marziamostafa.vercel.app/allservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('A new Service Added successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }


    return (
        <div>
            <div className='my-16 '>
                <form onSubmit={handleServiceReview}>
                    <h2 className="text-4xl card-actions justify-center container my-8">Add a service</h2>

                    <div className='grid grid-cols-1  gap-4'>


                        <input name='name' type="text" placeholder="Service Name" className="input input-ghost w-full input-bordered" />

                        <input name='price' type="text" placeholder="Price" className="input input-ghost w-full input-bordered" />

                        <input name='image' type="text" placeholder="Image url " className="input input-ghost w-full input-bordered" />


                        <label className="label">
                            <span className="label-text">Ingredients</span>
                        </label>
                        <textarea name='ingredients' className="textarea textarea-accent" placeholder="Add ingredients"></textarea>


                        <label className="label">
                            <span className="label-text">Recipe</span>
                        </label>
                        <textarea name='recipe' className="textarea textarea-accent" placeholder="Add the recipe"></textarea>
                    </div>


                    <div className='card-actions justify-center container my-4'>
                        {
                            user?.email ?
                                <>
                                    <input className='btn btn-active text-center' type="submit" value="Submit Review" />
                                </>
                                :
                                <>
                                    <div className='grid grid-cols-1'>

                                        <input className='btn btn-active text-center' type="submit" value="Submit Review" />
                                    </div>
                                </>
                        }

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddService;

// const handlechange = event => {
//     const msg = event.target.value;
//     console.log(msg)
//     const arr = [...review]
//     const newMsg = msg;


//     arr.message = newMsg


//     setUpmsg(arr)

// }