import React, { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { themeContext } from '../Context/Theme';

const menuOptions = [
     
     { label: "Product", path: "/product" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/Contact" },
    
  ];


export default function SimpleDropdownMenu() {
  const [anchorElement, setAnchorElement] = useState(null);
  const [highlightedOption, setHighlightedOption] = useState('');
  const [valueitme, setValue] = useState('');
  const isMenuOpen = Boolean(anchorElement);
  const {theme} =useContext(themeContext)

  const openMenu = (event) => {
   
    setAnchorElement(event.currentTarget);
    // setHighlightedOption(event.target.value)

  };
  const closeMenu = (selectedOption) => {
    // setAnchorElement(null);
  
       
  };
  // console.log("themme",theme)

  return (
    <div className={`mt-3.5 ${theme =="light" ? "text-white" : " text-black"}`}>
      <IconButton
        aria-label="menu"
        onClick={openMenu}
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton >
      <Menu
        anchorEl={anchorElement}
        open={isMenuOpen}
        onClose={() => setAnchorElement(null)}
      >
      {menuOptions.map((option) => (
          <MenuItem
            key={option.path}
            onClick={closeMenu}
            component={Link}
            to={option.path} 
          >
            {option.label}
            
            </MenuItem>

        ))}
      </Menu>

      {highlightedOption && (
        <div>
          <p>Selected Option: {highlightedOption}</p>
        </div>
      )}
    </div>
  );
}
