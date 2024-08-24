import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

const GeographicalDistribution = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products/geographical-distribution`)
      .then(response => {
        setLocations(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Geographical Distribution of Customers</h2>
      {/* <Map center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((loc, index) => (
          <Marker key={index} position={[loc.lat, loc.lon]}>
            <Popup>
              {loc.city}
            </Popup>
          </Marker>
        ))}
      </Map> */}
    </div>
  );
};

export default GeographicalDistribution;
