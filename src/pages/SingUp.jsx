import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../untily/firebase';
function SingUp() {
    const navigation = useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[username,setusername]=useState("")
    const[Loding,setloding]=useState(false)

    function dataSaved(){
        setloding(true)
        console.log(email)
        console.log(password)
        console.log(username)
        createUserWithEmailAndPassword(auth,email,password).then(()=>{
            alert("Create Acount Successfully")
            navigation("/")

        }).catch((err)=>{
            console.log("errror",err)
            setloding(false)
        })
    }

    return (
        <div className="bg-gray-100 flex justify-center items-center  ">
            <div className="bg-white mt-4 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
                        <input 
                            id="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            type="text"
                            placeholder="Enter your username"
                            onChange={(e)=>setusername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                        <input 
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e)=>setEmail(e.target.value)}

                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                        <input 
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e)=>setPassword(e.target.value)}

                        />
                    </div>
                    <button 
                      onClick={dataSaved}
                     className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    {Loding ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 text-white animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx={12}
                                        cy={12}
                                        r={10}
                                        stroke="currentColor"
                                        strokeWidth={4}
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8l3.5 3.5-3.5-3.5V4a8 8 0 01-8 8z"
                                    />
                                </svg>
                            </div>
                            ) : ( "Login" ) }
                    </button>
                    <Link className='text-center w-full flex justify-center gap-1' to={"/Login"}>Already have an acount ? <span className='hover:text-blue-400 hover:underline'>Sign In</span></Link>
                </div>
                <div className="my-6 flex items-center justify-center">
                    <hr className="w-full border-gray-300" />
                    <span className="mx-4 text-gray-600">or</span>
                    <hr className="w-full border-gray-300" />
                </div>
                <button 
                    className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md flex items-center justify-center hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    <GoogleIcon className="mr-2" /> Sign Up with Google
                </button>
            </div>
        </div>
    );
}

export default SingUp;
