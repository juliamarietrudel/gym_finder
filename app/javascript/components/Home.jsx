import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="secondary-color">
        <h1 className="display-4">Climbing Gyms</h1>
        <p className="lead">A list of all the climbing gyms near you.</p>
        <hr className="my-4" />
        <Link to="/gyms" className="btn btn-lg custom-button" role="button">
          View Gyms
        </Link>
      </div>
    </div>
  </div>
);
