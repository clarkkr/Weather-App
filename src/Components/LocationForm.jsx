import { useState } from "react";
import axios from "axios";
import { CurrentWeather } from "../Components/CurrentWeather";
import { Map } from "../Components/Map";

{
  /*Variable to hold my API key:
  I understand this is unsafe however it is a free API anyone can use*/
}
const API_KEY = "a4c5a51dda2189ce653991886f5c90ec";

export const LocationForm = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [mapCoordinates, setMapCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [currentData, setCurrentData] = useState({});
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  async function handleLocationSearch(e) {
    {
      /*Prevents page refresh on form submission*/
    }
    e.preventDefault();

    {
      /*Variable to hold the response of the OpenWeather API call*/
    }
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}&units=imperial`
    );

    setCurrentData(response.data);
    setName(response.data.name);
    setLoading(false);
    setMapCoordinates(coordinates);
  }
  function handleChange(e) {
    setCoordinates({ ...coordinates, [e.target.name]: Number(e.target.value) });
  }
  return (
    <div className="w-screen min-h-screen text-black flex flex-col bg-gradient-to-b from-blue-300 to-white">
      <h3 className="text-2xl font-semibold text-gray-800 text-center mt-16 mb-4">
        Latitude/Longitude Search
      </h3>
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleLocationSearch} className="space-y-4 text-black">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            id="latitude"
            name={"latitude"}
            step="0.01"
            min="-90"
            max="90"
            placeholder={"Latitude"}
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="longitude">Longitutde</label>
          <input
            type="number"
            id="longitude"
            name={"longitude"}
            step="0.01"
            min="-180"
            max="180"
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
      {!loading && (
        <>
          <div className="mt-16 flex flex-row justify-center space-x-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                Current Weather
              </h3>
              <CurrentWeather weatherData={currentData} name={name} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                Location Map
              </h3>
              <Map
                latitude={mapCoordinates.latitude}
                longitude={mapCoordinates.longitude}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LocationForm;
