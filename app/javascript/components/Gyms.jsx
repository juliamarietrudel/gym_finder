import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Gyms = () => {
  const [gyms, setGyms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const url = "/api/v1/gyms";
        // console.log("Fetching from URL:", url);

        const response = await fetch(url);
        // console.log("Response status:", response.status);
        // console.log("Response headers:", response.headers);

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error(`Expected JSON, got ${contentType}`);
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        // console.log("Raw response:", text);

        const data = JSON.parse(text);
        // console.log("Fetched gym data:", data);
        setGyms(data);
      } catch (error) {
        // console.error("Error fetching gyms:", error);
        // console.error("Error details:", error.message);
        setError(error.message);
        navigate("/");
      }
    };

    fetchGyms();
  }, []);

  const allGyms = gyms.map((gym) => (
    <div className="col-md-3 mb-4" key={gym.id}>
      <Card id={gym.id} name={gym.name} description={gym.description} />
    </div>
  ));

  return (
    <>
      <div className="">
        <div className="row">{allGyms}</div>
      </div>
    </>
  );
};

export default Gyms;
