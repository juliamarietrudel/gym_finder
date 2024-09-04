import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Gyms = () => {
  const [gyms, setGyms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = "api/gyms";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not okay.");
      })
      .then((response) => {
        setGyms(response);
      })
      .catch(() => navigate("/"));
  });

  return (
    <>
      <h1>hi</h1>
    </>
  );
};

export default Gyms;
