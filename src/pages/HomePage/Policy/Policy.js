import React from 'react';
import chef from '../../../assets/images/chef.jpg'
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Policy = () => {
    return (
        <div className="hero min-h-max bg-base-200 my-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={chef} className="rounded-lg shadow-2xl bg-current" />
                <div className='w-2/3'>
                    <h1 className="text-5xl font-bold">About Service Provider</h1>
                    <p className="py-6 font-medium">As a foodie I believe that all the foodies in the world only live for food.It's our passion to eat. We admire the art of food. <br />
                        But the food we eat at home cannot be compared with anything in the world. It gives us the mental peace too. So from this point of view I come up with the idea to provide you the food that will make you to feel like home. I'm determined to reach up to the customers satisfaction.</p>
                    <div>
                        <h4 className='text-2xl font-semibold'>We are available in:</h4>
                        <div className='hero-content flex-col lg:flex-row-reverse'>
                            <div className="card w-96 bg-red-200 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Uttara<MapPinIcon className="h-6 w-6"></MapPinIcon></h2>
                                    <p>4 Embankment Drive Road,sector-10,Uttara</p>
                                    <p className='flex'><PhoneIcon className="h-4 w-4"></PhoneIcon><small>017XXXXXXXX</small></p>

                                </div>
                            </div>
                            <div className="card w-96 bg-orange-200 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Savar<MapPinIcon className="h-6 w-6"></MapPinIcon></h2>
                                    <p>Pollibiddut,<br /> Nabinagar,Savar,Dhaka</p>
                                    <p className='flex'><PhoneIcon className="h-4 w-4"></PhoneIcon><small>017XXXXXXXX</small></p>

                                </div>
                            </div>
                            <div className="card w-96 bg-green-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Tongi<MapPinIcon className="h-6 w-6"></MapPinIcon></h2>
                                    <p>College Gate,Auchpara,Tongi,Gazipur</p>
                                    <p className='flex'><PhoneIcon className="h-4 w-4"></PhoneIcon><small>017XXXXXXXX</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Policy;