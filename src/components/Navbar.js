import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Link, 
  useLocation
} from 'react-router-dom';

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
        <div className="navbar-mobile">
          <span className={`navbar-mobile-items ${isActive('/') && 'active'}`}>
            <Link to="/contact" className="link animated-underline">
              contact
            </Link>
          </span>
          <span className={`navbar-mobile-items ${isActive('/') && 'active'}`}>
            <Link to="/" className="link  animated-underline">
              works
            </Link>
          </span>
        </div>
      )}
      {largeScreen && (
        <div className="navbar-desktop">
          <span className={`navbar-desktop-items ${isActive('/contact') && 'active'}`}>
            <Link to="/contact" className="link animated-underline">
              contact
            </Link>
          </span>
          <span className={`navbar-desktop-items ${isActive('/') && 'active'}`}>
            <Link to="/" className="link animated-underline">
              works
            </Link>
          </span>
        </div>
      )}
    </>
  );
}


export default Navbar;
