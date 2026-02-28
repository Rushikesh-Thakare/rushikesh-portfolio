import React from "react";
import "../index.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CoffeeIcon from '@mui/icons-material/Coffee';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer id="footer" className="footer">
      <p>© {currentYear} Rushikesh Thakare. All rights reserved.</p>
      <p className="foot-icons">
        Made with 
        <FavoriteBorderIcon sx={{ fontSize: 16, color: '#f78166' }} />
        and 
        <CoffeeIcon sx={{ fontSize: 16, color: '#f78166' }} />
         by Rushikesh Thakare
        </p>
    </footer>
  );
}

export default Footer;