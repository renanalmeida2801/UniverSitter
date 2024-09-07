import React from 'react';
import './StarRating.css'; // Ensure this path is correct

const StarRating = ({ width, rating, starSize = 30, color = 'slategray' }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div style={{ width: `${width}px` }} className="stars-view">
      {stars.map((star) => (
        <label
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          style={{
            width: `${starSize}px`,
            height: `${starSize}px`,
            background: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='${star <= rating ? color : 'transparent'}' stroke='${color}' stroke-width='38' d='M259.216 29.942L330.27 173.92l158.89 23.087L374.185 309.08l27.145 158.23-142.114-74.698-142.112 74.698 27.146-158.23L29.274 197.007l158.89-23.088z' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
          }}
          aria-label={`${star} star${star > 1 ? 's' : ''}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
