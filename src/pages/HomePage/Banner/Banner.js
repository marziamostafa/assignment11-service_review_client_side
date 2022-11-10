import React from 'react';
import img1 from '../../../assets/banner/banner10.webp'
import img2 from '../../../assets/banner/banner9.jpg'
import img3 from '../../../assets/banner/banner7.jpg'
import img4 from '../../../assets/banner/banner5.jpg'
import './Banner.css'

const Banner = () => {


    return (
        <div className="carousel w-full min-h-fit">
            <div id="slide1" className="carousel-item relative w-full h-4/5">
                <div className=''>
                    <img alt='' src={img1} className="w-full" />
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Get food <br />
                        at home
                    </h1>
                </div>
                <div className="absolute flex justify-between w-2/5 transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <p className='text-white text-xl'>We are proving you the opportunity to get any home made food at your home. So order now!</p>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img alt='' src={img2} className="carousel-img w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Get food <br />
                        at home
                    </h1>
                </div>
                <div className="absolute flex justify-between w-2/5 transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <p className='text-white text-xl'>We are proving you the opportunity to get any home made food at your home. So order now!</p>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='' src={img3} className=" w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Get food <br />
                        at home
                    </h1>
                </div>
                <div className="absolute flex justify-between w-2/5 transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <p className='text-white text-xl'>We are proving you the opportunity to get any home made food at your home. So order now!</p>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='carousel-img '>
                    <img alt='' src={img4} className="carousel-img w-full h-full" />
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Get food <br />
                        at home
                    </h1>
                </div>
                <div className="absolute flex justify-between w-2/5 transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <p className='text-white text-xl'>We are proving you the opportunity to get any home made food at your home. So order now!</p>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;