import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid'

const SpecialOrder = () => {
    return (
        <div className='my-5 py-5 bg-slate-300'>
            <div>
                <h1 className='text-4xl text-center'>Taking Special Oders For:</h1>
                <p className='text-center my-3'>We are taking orders for any kind of special Occations like Birthday,Marriageor others. Remember to place your order at least 7days ago.</p>
            </div>
            <div className='hero-content flex-col lg:flex-row justify-around'>
                <div className="card card-compact w-64 bg-orange-200 shadow-xl">
                    <figure><img src="https://img.jakpost.net/c/2016/08/18/2016_08_18_9979_1471497895._large.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Birthday Ceremony!</h2>
                        <p>Office: 4 Embankment Drive Road,sector-10,Uttara</p>
                        <p className='flex'><PhoneIcon className="h-4 w-4"></PhoneIcon><small>017XXXXXXXX</small></p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-active">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-64 bg-orange-200 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Marriage Ceremony!</h2>

                        <p>Office: 4 Embankment Drive Road,sector-10,Uttara</p>
                        <p className='flex'><PhoneIcon className="h-4 w-4"></PhoneIcon><small>017XXXXXXXX</small></p>

                        <div className="card-actions justify-center">
                            <button className="btn btn-active">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-64 bg-orange-200 shadow-xl ">
                    <figure><img className='' src="https://miro.medium.com/max/1400/1*Qy2bX8UgtfPABeo3KRK7Jg.jpeg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Special Occations!</h2>
                        <p>Office: 4 Embankment Drive Road,sector-10,Uttara</p>
                        <p className='flex'><PhoneIcon className="h-4 w-4"></PhoneIcon><small>017XXXXXXXX</small></p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-active">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOrder;