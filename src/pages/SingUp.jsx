import React, {useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth,storage } from '../../untily/firebase';
import { styled } from '@mui/material/styles';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
function SingUp() {
    const navigation = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profile, setProfile] = useState("")
    const [username, setusername] = useState("")
    const [Loding, setloding] = useState(false)
    
const UserInformation={
    email,
    password,
    profile,
    username,
}
    function dataSaved() {
        setloding(true)
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            const imageRef = ref(storage,`users/${auth.currentUser.uid}`)
            uploadBytes(imageRef,profile[0]).then(()=>{
                console.log("image successful upload")
                getDownloadURL(imageRef).then((url)=>{
                    console.log("url==>",url)
                    UserInformation.profile = url
                    
                    setloding(false)
                    alert("Your Account Create successful")
                    navigation("/")
                }).catch((err)=>console.log("not img get",err))
            }).catch((err)=>{
                console.log(err)
            })
        }).catch((err) => {
            console.log("errror", err)
            setloding(false)
        })

    }
    function GoogleSingUp() {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        signInWithPopup(auth, provider)
            .then((result) => {
                navigation("/")

            }).catch((error) => {

                console.log("errr", error)

            });
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
                            onChange={(e) => setusername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}

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
                    <div>
                        <label htmlFor="files" className="block text-gray-700 font-medium mb-1">Upload Profile</label>
                        <input
                            id="files"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            type="file"
                            placeholder="Enter your password"
                            onChange={(e) => setProfile(e.target.files)}

                        />
                    </div>
                    {/* <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                                Upload Profile
                        <VisuallyHiddenInput
                            type="file"
                            onChange={(event) => setProfile(event.target.files)}
                            multiple

                        />

                    </Button> */}
                    <button
                        onClick={dataSaved}
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {Loding ? (
                           "Loding..."
                        ) : ("SingUp")}
                    </button>
                    <Link className='text-center w-full flex justify-center gap-1' to={"/Login"}>Already have an acount ? <span className='hover:text-blue-400 hover:underline'>Sign In</span></Link>
                </div>
                <div className="my-6 flex items-center justify-center">
                    <hr className="w-full border-gray-300" />
                    <span className="mx-4 text-gray-600">or</span>
                    <hr className="w-full border-gray-300" />
                </div>
                <button onClick={GoogleSingUp}
                    className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md flex items-center justify-center hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    <GoogleIcon className="mr-2" /> Sign Up with Google
                </button>
            </div>
        </div>
    );
}

export default SingUp;
