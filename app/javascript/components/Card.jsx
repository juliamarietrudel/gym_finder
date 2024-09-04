import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, description }) => {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <Link to={`/gyms/${id}`} className="btn btn-dark mt-3">
          More details
        </Link>
      </div>
    </div>
  );
};

export default Card;
