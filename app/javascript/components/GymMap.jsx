import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const GymMap = ({ latitude, longitude }) => {
  const [viewState, setViewState] = React.useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 14,
  });

  console.log("Mapbox Token:", window.ENV.REACT_APP_MAPBOX_TOKEN);

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={window.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker latitude={latitude} longitude={longitude} color="red" />
    </Map>
  );
};

export default GymMap;
