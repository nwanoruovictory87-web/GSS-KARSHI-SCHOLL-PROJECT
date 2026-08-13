import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { GetGpsLocation } from "../../shared/Gps";
//import OfflineTileLayer from "./OfflineTileLayer";
import "leaflet/dist/leaflet.css";
function AllStudentsTracking(): React.ReactElement {
  const [isDevicesLocation, setIsDevicesLocation] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number>(0);
  const [longtitude, setLongtitude] = useState<number>(0);
  GetGpsLocation()
    .then((gpsPostion) => {
      setLatitude(gpsPostion.latitude);
      setLongtitude(gpsPostion.longitude);
      setIsDevicesLocation(true);
    })
    .catch((error) => {
      console.error(error);
      setIsDevicesLocation(false);
    });
  return (
    <div className="component-spacing w-full h-full  relative">
      <div className="w-full h-full pb-12">
        {isDevicesLocation && (
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
          </MapContainer>
        )}
      </div>
    </div>
  );
}
export default AllStudentsTracking;
