import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SimpleDropdownMenu from './pagesTags';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../untily/firebase';


function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const {userShow,setusershow} = React.useState([]) 
    // const { user } = React.useContext(UserContext);
    // console.log(user)

    console.log(userShow)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="flex bg-gray-50 h-16 justify-between items-center">
            <div className='w-52 text-center'>
                <p className="font-extrabold text-3xl">logo</p>
            </div>
            <div className='w-2/4 h-10 rounded-xl'>
                <input type="text" className="bg-gray-100 h-full w-full rounded-lg pl-8 outline-none" placeholder='Search Product ....' />
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
                <div className='mt-2'>
                    <IconButton
                        color="inherit"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <AccountCircleIcon sx={{ fontSize: 30 }} />
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
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                    
                </div>
                <SimpleDropdownMenu/>
            </div>
            <div>

            </div>
        </div>
    )
}
export default Header