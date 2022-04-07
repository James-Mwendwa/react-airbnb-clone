import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const SearchResult = ({ img, location, title, description, star, price, total}) => {
    return (
      <div className="searchResult">
        <img src={img} alt={img} />
        <FavoriteBorderIcon className="searchResult-heart" />
        <div className="searchResult-info">
          <div className="searchResult-infoTop">
            <p> {location} </p>
            <h3>{title}</h3>
            <p>____</p>
            <p>{description}</p>
          </div>

          <div className="searchResult-infoBottom">
            <div className="searchResult-stars">
              <StarHalfIcon className="searchResult-star" />
              <p> {star} </p>
            </div>
            <div className="searchResult-price">
              <h2>{price}</h2>
              <p>{total}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default SearchResult;