import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../untily/firebase';
function SignIn() {
    const navigiton = useNavigate()
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [Loding, setlogding] = useState(false)
    function Saved() {
        setlogding(true)
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigiton("/")
        }).catch((err) => {
            alert(err)
            setlogding(false)

        })
    }
    // setlogding(false)

    return (
        <div className="bg-gray-100 flex justify-center  items-center ">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full mt-8 max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign In</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="Email" className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            id="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            type="text"
                            placeholder="Enter your Email"
                            onChange={(e) => setemail(e.target.value)}

                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button

                        onClick={Saved}
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >  {Loding ? (
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
                    <Link className='text-center w-full flex justify-center gap-1' to={"/SingUp"}>No account ? <span className='hover:text-blue-400 hover:underline'>Sign up</span></Link>
                </div>
                <div className="my-6 flex items-center justify-center">
                    <hr className="w-full border-gray-300" />
                    <span className="mx-4 text-gray-600">or</span>
                    <hr className="w-full border-gray-300" />
                </div>
                <button
                    className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md flex items-center justify-center hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    <GoogleIcon className="mr-2" /> Login with Google
                </button>
            </div>
        </div>
    );
}

export default SignIn;
