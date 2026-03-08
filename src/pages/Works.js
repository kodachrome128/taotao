import React from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';
// import SocialLinks from '../components/SocialLinks';
// import AnimatedDiv from '../components/AnimatedDiv';
import GridItem from '../components/GridItem';


import Automotive from '../photos/automotive/dealership/ferrari_488_spider-1.jpg';
import Street from '../photos/street/hong_kong-1.png';


const Works = () => {

  return (
    <>
      <div>
        <Navbar />
        <div className="works-grid">
          <GridItem image={Automotive} text="Automotive" />
          <GridItem image={Street} text="Street" />
        </div>
      </div>
    </>
  );
};

export default Works;
