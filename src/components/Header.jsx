import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SimpleDropdownMenu from './pagesTags';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { themeContext } from '../Context/Theme';
import LightModeIcon from '@mui/icons-material/LightMode';
import { UserContext } from '../Context/User';
import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth} from '../../untily/firebase';
import { search } from '../Context/Search';


// const id = auth.currentUser.uid
function Header() {
    const { theme, settheme } = React.useContext(themeContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { usershow } = React.useContext(UserContext);
    const { userInfo, isLogin } = usershow
     const {setSearch,Search} = React.useContext(search)
    //  console.log(userInfo)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    function singout() {
        signOut(auth)
    }



    return (
        <div className={`flex h-16 justify-between items-center ${theme == "Dark" ? " bg-gray-50 text-black" : "bg-gray-700 text-white"}
        `}>
            <div className='w-52 text-center'>
                <p className="font-extrabold text-3xl">logo</p>
            </div>
            <div className='w-2/4 h-10 rounded-xl'>
                <input onChange={(e)=>setSearch(e.target.value)}  type="text"  className="bg-gray-100 text-black h-full w-full rounded-lg pl-8 outline-none" placeholder='Search Product....' />
            </div>
            <div className='flex gap-4 mb-2' >
                <IconButton color="inherit">
                    <div>
                        <ShoppingCartIcon sx={{ fontSize: 30 }} />
                    </div>

                </IconButton>
                <IconButton color="inherit">
                    <div  >
                        <FavoriteBorderIcon sx={{ fontSize: 30 }} /></div>
                </IconButton>
                <div>
                    {theme == 'Dark' ? (
                        <IconButton onClick={() => settheme("light")}>
                            <DarkModeIcon sx={{ fontSize: 30, }} className='text-black mt-3' />
                        </IconButton>
                    ) : (
                        <IconButton onClick={() => settheme("Dark")}>
                            <LightModeIcon sx={{ fontSize: 30 }} className='text-white mt-3' />
                        </IconButton>
                    )}
                </div>
                <div className='mt-2 '>
                    {isLogin ? (
                        <div>


                            <IconButton
                                 
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            ><Avatar sx={{ 
                                  background: 'black',
                                    height:'30px',  
                                    width: '30px',
                                    marginTop:'5px' 
                                
                                   }} src={userInfo.photoUrl} />
                            </IconButton>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                {userInfo.name && (<div style={{paddingLeft:'10px'}}>{`Name: ${userInfo.name}`}</div>)}
                                <div style={{padding :`10px`}} >Email : {userInfo.email}</div>
                                <MenuItem style={{
                                    marginLeft:'10px',
                                    padding: '10px 20px',
                                    backgroundColor: '#FF0000',  
                                    borderRadius: '8px',         
                                    color: '#b20000',           
                                    fontWeight: 'bold',        
                                    cursor: 'pointer',  
                                     width : '100px',     
                                     color : "white",
                                    transition: 'background-color 0.3s ease',
                                }} 
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#FF0000'}  // Red on hover
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#F5004F'}
                                onClick={singout}>Logout</MenuItem>

                            </Menu>
                        </div>
                    ) : (
                        <div>


                            <IconButton
                                color="inherit"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >{<AccountCircleIcon sx={{ fontSize: 30, 
                                marginTop:'5px'
                            }} />}
                            </IconButton>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <Link to={"/Login"}>
                                    <MenuItem onClick={handleClose}>Login</MenuItem>
                                </Link>
                            </Menu>
                        </div>
                    )}



                </div>
              

                <SimpleDropdownMenu />
            </div>
            <div>

            </div>
        </div>
    )
}
export default Header