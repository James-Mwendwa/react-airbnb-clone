import React, { useState } from 'react';
import "./Banner.css";
import Button from '@mui/material/Button';
import Search from './Search';
import { useHistory }  from "react-router-dom";

const Banner = () => {

  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);


    return (
      <div className="banner">
        {/* banner search */}
        <div className="banner-search">

          { showSearch && <h1><Search /></h1> }

          <Button variant="outlined" className="banner-searchButton"
           onClick={() => setShowSearch(!showSearch)}>
            { showSearch ? 'Hide' : 'Search Dates' }
          </Button>
        </div>

        <div className="banner-info">
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan different kind of getaway to uncover the hidden gems near you.
          </h5>
          <Button variant="outlined" onClick={() => history.push('/search')}>Explore Nearby</Button>
        </div>
      </div>
    );
}
 
export default Banner;