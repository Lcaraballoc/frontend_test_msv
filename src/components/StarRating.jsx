import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hoverStar, setHover] = useState(null);

  return (
    <div className="ratingContainer">
      <h2>Calificacion:</h2>
      {stars.map(i => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="ratingContainer__star"
              color={
                ratingValue <= (hoverStar || rating) ? '#ffc107' : 'e4e6e9'
              }
              size={40}
              onMouseEnter={() => {
                setHover(ratingValue);
              }}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
