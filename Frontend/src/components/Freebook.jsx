import React from 'react'
import list from '../../public/list.json'
import Slider from "react-slick";
import Card from "./Card"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Freebook() {
    const filterData = list.filter((data) => data.category === "free");
    // console.log(filterData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-3 mt-4  bg-white h-100vh  dark:bg-slate-900 dark:text-white">

                <div className='text-gray-700  dark:bg-slate-900 dark:text-white mt-2 py-3'>
                    <h1 className='text-2xl font-bold'>Free Offered</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eligendi libero sit, laudantium, earum consequuntur aliquid neque rerum sed cum debitis. Facere dolor unde nemo deserunt esse totam velit doloremque?</p>
                </div>

                <div className=' dark:bg-slate-900 dark:text-white'>
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Card className="mr-2" item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Freebook
