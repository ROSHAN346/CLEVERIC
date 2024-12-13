import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Card from './Card'
import {Link} from 'react-router-dom'
import axios from "axios"

function Course() {
  const [book,setBook] = useState([]);
  useEffect(() =>{
     const getBook = async ()=>{
      try{
       const res = await axios.get('http://localhost:4001/book');
       console.log(res.data);
       setBook(res.data)
      }catch(error){
        console.log(error)
      }
     };
     getBook();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white '>
        <div className='pt-28 items-center justify-center text-center space-y-10 '>

            <h1 className='text-3xl  md:text-4xl text-gray-800  dark:bg-slate-900 dark:text-white'>
                We're delighted  to have you  
                <span className='text-green-500'>  Here ! :) </span>
            </h1>

            <p className='text-gray-600  dark:bg-slate-900 dark:text-white  pt-26'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti quam esse consequuntur ipsum nam nemo, dolore aspernatur, beatae provident cumque aut rem. Dicta tempore animi earum minima temporibus perspiciatis!
            Quae saepe corrupti iusto unde doloremque neque sapiente natus, dignissimos veniam ipsum. Saepe, cumque sed? Minima, tenetur. Deleniti, quas, laborum quae veniam architecto eum libero, fuga vero unde animi asperiores.</p>

            <Link to ="/">
            <button className='mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800' href='/'>Back</button>
            </Link>


        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
            {book.map((item)=>(
                   <Card key={item.id} item={item}/>
                ))}
        </div>


      
    </div>
    </>
  )
}

export default Course
