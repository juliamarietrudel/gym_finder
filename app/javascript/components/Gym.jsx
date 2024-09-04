import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import GymMap from "./GymMap";

const Gym = () => {
  const params = useParams();
  const [gym, setGym] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGym = async () => {
      try {
        setLoading(true);
        const url = `/api/v1/gyms/${params.id}`;
        // console.log("Fetching from URL:", url);
        const response = await fetch(url);
        // console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("Parsed data:", data);
        if (!data || Object.keys(data).length === 0) {
          // console.log("Received empty data.");
          throw new Error("Received empty data");
        } else {
          setGym(data);
        }
      } catch (error) {
        // console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGym();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!gym) return <div>No gym data available.</div>;

  // console.log("Gym data:", gym); // Add this line to log the gym data

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h3>{gym.name}</h3>
          <p className="fst-italic">{gym.address}</p>
          <p>{gym.description}</p>
          <Rating rating={gym.rating} />
        </div>
        <div className="col-sm">
          <GymMap />
        </div>
      </div>
    </div>
  );
};

export default Gym;
