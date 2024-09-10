// import { onAuthStateChanged } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import { auth } from "../../untily/firebase";

// export const UserContext = createContext()


// function UserContextprovider({chil}){
// const[usershow,setuser]=useState({
//     isLogin:false,
//     userInfo:{}
// })
// const [loading, setLoading] = useState(false);

// useEffect(()=>{
//  setLoading(true)
//  const subract = onAuthStateChanged(auth,(user)=>{
//     // console.log(user.email)
//     if(user){
//         setuser({
//             isLogin : true,
//             userInfo:{
//                 email : user.email
//             }
//         })
//     }else{
//         setuser({
//             isLogin: false,
//             userInfo: {},
//           });
//           console.log("User is not logged In");
//         }
//         setLoading(false);

//  })
//  return subract
// },[])
// return (
//     <UserContext.Provider value={{ usershow, setuser }}>
//       {loading ? "Loading........." : chil}
//     </UserContext.Provider>
//   );

// }
// export default UserContextprovider;
