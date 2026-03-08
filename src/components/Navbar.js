import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Link, 
  useLocation
} from 'react-router-dom';

import Linkedin from '../icons/linkedin.png';
import Instagram from '../icons/instagram.png';

function Navbar () {
  const smallScreen = useMediaQuery('(max-width: 650px)');
  const largeScreen = useMediaQuery('(min-width: 651px)');
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  }

  return (
    <>
      {smallScreen && (
        <div className="navbar-pages-mobile">
          <span className={`navbar-pages-mobile-items ${isActive('/') && 'active'}`}>
            <Link to="/" className="link  animated-underline">
              works
            </Link>
          </span>
          <span className={`navbar-pages-mobile-items ${isActive('/') && 'active'}`}>
            <Link to="/contact" className="link animated-underline">
              contact
            </Link>
          </span>
        </div>
      )}
      {largeScreen && (
        <div className="navbar">
          <div className="navbar-sections">
            <div className="navbar-sections navbar-pages-desktop">
              <span className={`navbar-pages-desktop-items ${isActive('/') && 'active'}`}>
                <Link to="/" className="link animated-underline">
                  works
                </Link>
              </span>
              <span className={`navbar-pages-desktop-items ${isActive('/contact') && 'active'}`}>
                <Link to="/contact" className="link animated-underline">
                  contact
                </Link>
              </span>
            </div>
            <div className="navbar-sections">
              <h className="name">tao tao</h>
            </div>
            <div className="socials navbar-sections">
              <a href="https://www.linkedin.com/in/tao-tao-608365269/" className="navbar-pages-desktop-icons">
                  <img src={Linkedin} alt="linkedin" width="30px" />
              </a>
              <a href="https://www.instagram.com/kodachrome128/" className="navbar-pages-desktop-icons">
                  <img src={Instagram} alt="instagram" width="30px" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


export default Navbar;
