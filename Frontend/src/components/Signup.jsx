import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from "./Login.jsx"
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from 'react-hot-toast';


function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const { handleSubmit, register, formState: { errors } } = useForm();


    //backend upload the details from User
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.username,
            email: data.email,
            password: data.password,
        } // Handle form data
        await axios.post('http://localhost:4001/user/signup', userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('SignUp Successfully !')
                }
                localStorage.setItem("Users" , JSON.stringify(res.data.user) ); 
                navigate(from , {replace:true})
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error:" + err.response.data.message)
                }
            })
    };


    return (
        <>
            <div>
                <div id="" className="flex justify-center items-center h-screen">
                    <div className=" bg-white text-black  dark:bg-blue-900 dark:text-black  border-[2px] p-9 rounded-2xl 
                    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

                        <div className='flex justify-end mb-7'>
                            {/* close button*/}
                            <div className=" flex items-center justify-center bg-slate-300 text-white border-none rounded-md w-7">
                                <form method="">
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to="/" className=" h-7 w-9  border-none text-black  rounded-1xl">X</Link>
                                </form>
                            </div>
                        </div>

                        <form action="" onSubmit={handleSubmit(onSubmit)}>

                            {/* Fullname */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="username" placeholder='Enter Your fullname'
                                    {...register("username", { required: "Username is required" })}
                                    className='w-80 px-3 py-1 border rounded-md outline-none bg-white' />
                                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                            </div>


                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='Enter Your Email'
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className='w-80 px-3 py-1 border rounded-md outline-none bg-white' />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>

                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="password" placeholder='Your Password'
                                    {...register("password", { required: "Password is required" })}
                                    className='w-80 px-3 py-1 border rounded-md outline-none bg-white' />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>

                            <div className='flex justify-between mt-4'>
                                <button type="submit" className="font-bold text-lg text-white ">SignUp</button>
                                <div>
                                    Not Register! <Link to="" className='text-blue-900 cursor-pointer'>Login</Link>{""}
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
