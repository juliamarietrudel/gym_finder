import React from "react";
import Routes from "../routes";
import Navbar from "./Navbar";

export default () => (
  <>
    {
      <div>
        <Navbar />
        <div className="container my-4">{Routes}</div>
      </div>
    }
  </>
);
