import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative h-[400px] lg:h-[600px] w-full">
                <img src="https://i.ibb.co/3SFLygf/3.jpg" className="w-full" />
                <div className="absolute text-white h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-10 py-10">
                    <div className="">
                        <div className=" space-y-7 w-1/2 lg:w-1/3">
                            <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <button class="btn btn-primary bg-[#FF3811]  border-none mr-5">Discover More</button>
                        <button class="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative h-[400px] lg:h-[600px] w-full">
            <img src="https://i.ibb.co/hByD7tq/6.jpg" className="w-full" />
                <div className="absolute text-white h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-10 py-10">
                    <div className="">
                        <div className=" space-y-7 w-1/2 lg:w-1/3">
                            <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <button class="btn btn-primary bg-[#FF3811]  border-none mr-5">Discover More</button>
                        <button class="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative h-[400px] lg:h-[600px] w-full">
            <img src="https://i.ibb.co/JHg2qd7/3.jpg" className="w-full" />
                <div className="absolute text-white h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-10 py-10">
                    <div className="">
                        <div className=" space-y-7 w-1/2 lg:w-1/3">
                            <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <button class="btn btn-primary bg-[#FF3811]  border-none mr-5">Discover More</button>
                        <button class="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative h-[400px] lg:h-[600px] w-full">
            <img src="https://i.ibb.co/F7vHttX/2.jpg" className="w-full" />
                <div className="absolute text-white h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-10 py-10">
                    <div className="">
                        <div className=" space-y-7 w-1/2 lg:w-1/3">
                            <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <button class="btn btn-primary bg-[#FF3811]  border-none mr-5">Discover More</button>
                        <button class="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;