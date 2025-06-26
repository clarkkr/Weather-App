import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

{
  /* Function to update the map whenever we search new coordinates */
}
function MapUpdater({ latitude, longitude }) {
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude], 3);
  }, [map, latitude, longitude]);
}

export function Map({ latitude, longitude }) {
  return (
    <div>
      {/* Creates a new map with:
         - It being centered around our latitude and longitude
         - Having a zoom of 3
         - And a small enough styling to match the information */}
      <MapContainer
        center={[latitude, longitude]}
        zoom={3}
        style={{ height: "500px", width: "600px" }}
      >
        {/* Required react leaflet attribution*/}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/*A marker at the position searched with a popup textbox*/}
        <Marker position={[latitude, longitude]}>
          <Popup>
            A marker at latitude {latitude} and longitude {longitude}
          </Popup>
        </Marker>
        <MapUpdater latitude={latitude} longitude={longitude} />
      </MapContainer>
    </div>
  );
}
