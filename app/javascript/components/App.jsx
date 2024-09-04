import React from "react";
import Routes from "../routes";
import Navbar from "./Navbar";

export default () => (
  <>
    {
      <div>
        <Navbar />
        <div className="container">{Routes}</div>
      </div>
    }
  </>
);
