export const CurrentWeather = (weatherData) => {
  return (
    <div className="bg-white shadow-lg rounded-lg min-w-96">
      <div className="bg-blue-500 text-white text-center py-4">
        <h2 className="text-2xl font-semibold ">Current Weather Information</h2>
      </div>

      <div className="p-6">
        <ul className="space-y-2"></ul>
      </div>
    </div>
  );
};
