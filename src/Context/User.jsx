import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../../untily/firebase";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import { doc, getDocs } from "firebase/firestore";

export const UserContext = createContext()

function UserContextprovider({ children }) {
    // console.log(auth)
  
    const [usershow, setuser] = useState({
        isLogin: false,
        userInfo: {}
        //   console.log("chek")
    })
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const subract = onAuthStateChanged(auth, (user) => {
            // console.log(user.email)
            if (user) {
                setuser({
                    isLogin: true,
                    userInfo: {
                        email: user.email,
                        name: user.displayName,
                        photoUrl: user.photoURL,
                        id : user.uid
                    }
                })
            } else {
                setuser({
                    isLogin: false,
                    userInfo: {},
                });
                console.log("User is not logged In");
            }
            setLoading(false);

        })
        return subract
    }, [])
    return (
        <UserContext.Provider value={{ usershow, setuser }} >
            {loading ? <Box sx={{ display: 'flex ' , justifyContent :'center', alignItems:'center ', height:'100vh' }}>
                <CircularProgress />
            </Box>
                : children}
        </UserContext.Provider>
    );

}
export default UserContextprovider;
