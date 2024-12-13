import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        } // Handle form data
        await axios.post('http://localhost:4001/user/login', userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Login Successfully !')
                    document.getElementById("my_modal_5").close ;
                    setTimeout(()=>{
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                    },1000);
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error:" + err.response.data.message)
                }
            })
    };

    return (
        <>
            <div className='bg-white'>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-white text-black dark:bg-blue-900 dark:text-white">
                        {/* Close Button */}
                        <div className="modal-action">
                            <form method="dialog ">
                                {/* if there is a button, it will close the modal */}
                            <button  className="btn  px-2 w-9 justify-center bg-black border-none rounded-md text-white size-2">X</button>
                                {/* <button className="btn">Close</button> */}
                            </form>
                        </div>


                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* Email */}
                                <div className='mt-4 space-y-2'>
                                    <span>Email</span>
                                    <br />
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        placeholder='Enter Your Email'
                                        className='w-80 px-3 py-1 border rounded-md outline-none bg-white'
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                </div>

                                {/* Password */}
                                <div className='mt-4 space-y-2'>
                                    <span>Password</span>
                                    <br />
                                    <input
                                        type="password"
                                        placeholder='Your Password'
                                        {...register("password", { required: "Password is required" })}
                                        className='w-80 px-3 py-1 border rounded-md outline-none bg-white'
                                    />
                                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                                </div>

                                {/* Login Button and Link */}
                                <div className='flex justify-between mt-4'>
                                    <button type="submit" className="font-bold text-lg text-blue-500 dark:text-white">Login</button>
                                    <div>
                                        Not Registered? <Link to="/signup" className='text-green-500 cursor-pointer'>Sign Up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                </dialog>
            </div>
        </>
    );
}

export default Login;
