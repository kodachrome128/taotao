import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Link, 
  useLocation
} from 'react-router-dom';


const GridItem = ({ image, text, onClick}) => {
  return (
    <div className="grid-item" onClick={onClick}>
        <img src={image} alt={text} className="grid-item-img" />
        <div className="grid-item-overlay"></div>
        <div className="grid-item-text">{text}</div>
    </div>
  );
}


export default GridItem;
