import React from 'react'
import banner from "../../public/banner.jpg"

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row '>

                {/* Right Side */}
                <div className='order-2 md:order-1 w-full md:w-1/2 mt-14 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold text-blue-500'>
                            Hello ,  Here You will learn something <span className='text-blue-800'>new everyday!!!</span>
                        </h1>

                        <p className='text-gray-900  dark:bg-slate-900 dark:text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet nam iste consectetur. Eaque aperiam quos quo unde reiciendis ea quisquam sequi nemo optio amet placeat illo atque, corrupti nobis!
                            Obcaecati nulla corrupti animi, quibusdam assumenda dolore unde consequuntur impedit, quam dolores vero, facilis minima eum dolor velit fugiat dignissimos. Nulla amet aliquam quas sed porro sit quod vel sequi.</p>

                        <div className='emial '>
                            <label className="input input-bordered flex items-center gap-2 bg-white text-gray-600  w-full md:w-3/4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" />
                            </label>
                            <button className="btn mt-6 btn-secondary">Secondary</button>
                        </div>


                    </div>



                </div>


                {/* Left Side */}
                <div className='order-1 md:order-2 w-full md:w-1/2 mt-16 md:mt-32'>
                <img src={banner} alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner
