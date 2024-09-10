import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

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

  const openMenu = (event) => {
    setAnchorElement(event.currentTarget);
    // setHighlightedOption(event.target.value)

  };
  const closeMenu = (selectedOption) => {
    // setAnchorElement(null);
  
       
  };

  return (
    <div className='mt-2.5'>
      <IconButton
        aria-label="menu"
        onClick={openMenu}
      >
        <MoreVertIcon />
      </IconButton>
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
