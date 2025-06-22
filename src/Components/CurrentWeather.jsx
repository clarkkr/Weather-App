import { useEffect, useState } from "react";

export function CurrentWeather({ weatherData }) {
  const [times, setTimes] = useState({
    currentDate: "",
    currentTime: "",
    sunriseTime: "",
    sunsetTime: "",
  });

  useEffect(() => {
    {
      /* Expression to translate the unix date to an actual date rather than just numbers*/
    }
    let currentDateObject = new Date(weatherData.dt * 1000);
    let sunriseDateObject = new Date(weatherData.sys.sunrise * 1000);
    let sunsetDateObject = new Date(weatherData.sys.sunset * 1000);

    let currentDateString = currentDateObject.toString();
    let sunriseDateString = sunriseDateObject.toString();
    let sunsetDateString = sunsetDateObject.toString();

    let currentTime = currentDateString.substring(16, 24);
    let currentDate =
      currentDateString.substring(0, 3) +
      ", " +
      currentDateString.substring(4, 15);

    let sunriseTime = sunriseDateString.substring(16, 24);
    let sunsetTime = sunsetDateString.substring(16, 24);

    setTimes({
      ...times,
      currentDate: currentDate,
      currentTime: currentTime,
      sunriseTime: sunriseTime,
      sunsetTime: sunsetTime,
    });
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg min-w-96">
      <div className="bg-blue-500 text-white text-center py-4">
        <h2 className="text-2xl font-semibold ">Current Weather Information</h2>
      </div>

      <div className="p-6">
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Current Date: </span>
            <span>{times.currentDate}</span>
          </li>

          <li className="flex justify-between">
            <span>Current Time: </span>
            <span>{times.currentTime}</span>
          </li>
          <li className="flex justify-between">
            <span>Temperature: </span>
            <span>{Math.round(weatherData.main?.temp)}°F</span>
          </li>

          <li className="flex justify-between">
            <span>Feels Like: </span>
            <span>{Math.round(weatherData.main?.feels_like)}°F</span>
          </li>

          <li className="flex justify-between">
            <span>Sunrise: </span>
            <span>{times.sunriseTime}</span>
          </li>

          <li className="flex justify-between">
            <span>Sunset: </span>
            <span>{times.sunsetTime}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
