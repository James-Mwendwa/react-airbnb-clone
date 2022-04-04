import React from 'react';
import "./Banner.css";
import Button from '@mui/material/Button';

const Banner = () => {
    return (
      <div className="banner">
        {/* banner search */}
        <div className="banner-search">
          <Button variant="outlined" className="banner-searchButton">
            Search Dates
          </Button>
        </div>

        <div className="banner-info">
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan different kind of getaway to uncover the hidden gems near you.
          </h5>
          <Button variant="outlined">Explore Nearby</Button>
        </div>
      </div>
    );
}
 
export default Banner;