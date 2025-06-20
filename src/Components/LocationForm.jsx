import { useState } from "react";
import axios from "axios";

const API_KEY = "a4c5a51dda2189ce653991886f5c90ec";

export const LocationForm = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  function handleLocationSearch(e) {
    e.preventDefault;

    let response;
  }
  function handleChange(e) {
    setCoordinates({ ...coordinates, [e.target.name]: Number(e.target.value) });
  }
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-blue-300 to-white">
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleLocationSearch} className="space-y-4 text-black">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            id="latitude"
            name="latitude"
            step="0.01"
            min="-90"
            max="90"
            placeholder={"101"}
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="longitude">Longitutde</label>
          <input
            type="number"
            id="longitude"
            name="longitude"
            step="0.01"
            min="-180"
            max="180"
            required
            placeholder={"202..."}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold rounded-md py-3 hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocationForm;
