import React from 'react'

function Card({item}) {
    return (
        <>
            <div className='mt-2 my-3 p-3 '>
                <div className="card  w-92  shadow-xl hover:scale-105 duration-200 dark:border ">
                    <figure className=''>
                        <img style={{ height: '300px', width: '450px' , objectFit: 'cover'}}
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-gray-600  dark:bg-slate-900 dark:text-white">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="cursor-pointer border-[2px] rounded-full px-2 py-1 bg-green-500 text-white">${item.price}</div>
                            <div className="cursor-pointer border-[2px] rounded-full px-2 py-1 hover:bg-green-500 hover:text-white duration-200  ">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
