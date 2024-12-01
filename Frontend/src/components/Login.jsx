import React from 'react'

function Login() {
    return (
        <>
            <div className='bg-white'>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box bg-white  dark:bg-blue-900 dark:text-white ">
                        <h3 className="font-bold text-lg">Login</h3>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter Your Email' 
                            className='w-80 px-3 py-1 border rounded-md outline-none bg-white'/>
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder='Your Password'
                            className='w-80 px-3 py-1 border rounded-md outline-none bg-white' />
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
