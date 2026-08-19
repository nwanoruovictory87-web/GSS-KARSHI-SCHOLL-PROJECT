import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import { GetGpsLocation } from "../../shared/Gps";
//loading animation
import LoadingMap from "/assets/PlanetWorldPreloader.gif";
//import OfflineTileLayer from "./OfflineTileLayer";
import "leaflet/dist/leaflet.css";
function AllStudentsTracking(): React.ReactElement {
  const [isDevicesLocation, setIsDevicesLocation] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number>(0);
  const [longtitude, setLongtitude] = useState<number>(0);
  useEffect(() => {
    const retrayTimer = () =>
      !isDevicesLocation &&
      setTimeout(() => {
        getLocation();
      }, 5000);
    function getLocation() {
      GetGpsLocation()
        .then((location) => {
          setLatitude(location.latitude);
          setLongtitude(location.longitude);
          setIsDevicesLocation(true);
        })
        .catch((error) => {
          console.error("Error getting location:", error);
          setIsDevicesLocation(false);
          retrayTimer(); // Retry after 5 seconds
        });
    }
    getLocation();
  }, []);

  return (
    <div className="component-spacing h-full w-full relative">
      <div className="w-full h-full pb-12">
        {isDevicesLocation ? (
          <MapContainer
            center={[latitude, longtitude]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longtitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <Marker position={[8.9887, 7.5601]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <span className="flex h-full justify-center items-center">
            <div className="w-37.5 -mt-20 -ml-10">
              <img className="w-full h-full" src={LoadingMap}></img>
            </div>
          </span>
        )}
      </div>
    </div>
  );
}
export default AllStudentsTracking;
