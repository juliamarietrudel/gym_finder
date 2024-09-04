import React from "react";

const Rating = ({ rating }) => {
  const starCount = Math.round(Number(rating) || 0);
  // console.log("Rating prop:", rating, "Star count:", starCount);

  return (
    <>
      {[...Array(starCount)].map((_, index) => (
        <i key={index} className="fa-solid fa-star"></i>
      ))}
    </>
  );
};

export default Rating;
