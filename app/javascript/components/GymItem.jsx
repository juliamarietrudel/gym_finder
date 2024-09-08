import React from "react";
import { Link } from "react-router-dom";

const GymItem = ({ id, name, description }) => {
  return (
    <Link to={`/gyms/${id}`}>
      <div className="">
        <div className="">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">hi</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default GymItem;
