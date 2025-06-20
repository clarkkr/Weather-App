import { useState } from "react";

export const LocationForm = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  function handleLocationSearch(e) {}
  function handleChange(e) {
    setCoordinates({ ...coordinates, [e.target.name]: Number(e.target.value) });
  }
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-blue-300 to-white">
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleLocationSearch} className="space-y-4 text-black">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            placeholder={"101"}
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="longitude">Longitutde</label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            required
            placeholder={"Longitude"}
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
