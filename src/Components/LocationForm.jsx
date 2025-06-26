import { useState } from "react";
import axios from "axios";
import { CurrentWeather } from "../Components/CurrentWeather";
import { Map } from "../Components/Map";

{
  /*Variable to hold my API key:
  I understand having an API key in source code is unsafe however it is a free API anyone can use*/
}
const API_KEY = "a4c5a51dda2189ce653991886f5c90ec";

export const LocationForm = () => {
  {
    /* States for the two sets of coordinates we use:
    The current coordinates being typed & the submitted coordinates for the map*/
  }
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

    {
      /* Setting the states for later use based on the results of the API call*/
    }
    setCurrentData(response.data);
    setName(response.data.name);
    setLoading(false);
    setMapCoordinates(coordinates);
  }

  {
    /* A helper function to help us change the coordinates whenever the form is submitted*/
  }
  function handleChange(e) {
    setCoordinates({ ...coordinates, [e.target.name]: Number(e.target.value) });
  }

  return (
    /* Outermost div for overall page styling and gradient*/
    <div className="w-screen min-h-screen text-black flex flex-col bg-gradient-to-b from-blue-300 to-white">
      <h3 className="text-2xl font-semibold text-gray-800 text-center mt-16 mb-4">
        Latitude/Longitude Search
      </h3>

      {/* Section of code dedicated to the Latitude & Longitude form */}
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleLocationSearch} className="space-y-4 text-black">
          <label htmlFor="latitude">Latitude</label>
          {/* Each input box has its own unique id and name, 
          also with restraints on what numbers can be entered to ensure valid coordinates*/}
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
      {/* Ensures that the current weather and map are not loaded if the page is still loading
      to prevent null values*/}
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
