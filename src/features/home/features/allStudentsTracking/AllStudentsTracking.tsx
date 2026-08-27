import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import { useState, useEffect } from "react";
import { GetGpsLocation } from "../../shared/Gps";
import { SocketApi } from "../../../../storage/Socket";
//loading animation
import LoadingMap from "/assets/PlanetWorldPreloader.gif";
//import OfflineTileLayer from "./OfflineTileLayer";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// 1. Import the actual image files from your installed leaflet package
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerIconRetinaPng from "leaflet/dist/images/marker-icon-2x.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// 2. Safely apply them to Leaflet's defaults
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIconPng,
  iconRetinaUrl: markerIconRetinaPng,
  shadowUrl: markerShadowPng,
});
interface GpsPosition {
  latitude: number;
  longitude: number;
  trackingID: string;
}
function AllStudentsTracking(): React.ReactElement {
  const socketApi = SocketApi();
  const { socket } = socketApi;
  const [isDevicesLocation, setIsDevicesLocation] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number>(0);
  const [longtitude, setLongtitude] = useState<number>(0);
  const [studentsMarker, setStudentsMarker] = useState<GpsPosition[] | []>([]);
  //
  useEffect(() => {
    GetGpsLocation(
      (position: { accuracy: number; latitude: number; longitude: number }) => {
        setLatitude(position.latitude);
        setLongtitude(position.longitude);
        setIsDevicesLocation(true);
      },
      (error, statusCode) => {
        console.log(error, statusCode);
      },
    );
  }, []);
  //
  useEffect(() => {
    if (!socket) return;
    socket.emit("get-students-location");
    const requstLocationEvery5Second = setInterval(() => {
      socket.emit("get-students-location");
    }, 5000); // requst all location every 5 seconds
    //
    return () => {
      // clean up on component unmount
      clearInterval(requstLocationEvery5Second);
    };
  }, []);
  //
  useEffect(() => {
    if (!socket) return;
    const allStudentsLocation = (list: GpsPosition[] | []) => {
      setStudentsMarker(list);
    };
    socket.on("all-students-location", allStudentsLocation);
    //
    return () => {
      // clean up
      socket.off("all-students-location", allStudentsLocation);
    };
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
            {/* LayersControl lets you toggle between Google Maps and OpenStreetMap */}
            <LayersControl position="topright">
              {/* 1. Google Maps Detailed Street View */}
              <LayersControl.BaseLayer
                checked
                name="Google Maps (Detailed Streets)"
              >
                <TileLayer
                  attribution='&copy; <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Google Maps</a>'
                  // FIX: Replaced the broken pattern with the fully formed Google structure
                  url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                  maxZoom={20}
                />
              </LayersControl.BaseLayer>

              {/* 2. OpenStreetMap fallback */}
              <LayersControl.BaseLayer name="OpenStreetMap">
                <TileLayer
                  attribution='&copy; <a href="https://openstreetmap.org" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
                  // FIX: Replaced the broken pattern with the official OSM URL structure
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
            </LayersControl>

            {/* Admin Marker */}
            <Marker position={[latitude, longtitude]}>
              <Popup>Admin </Popup>
            </Marker>

            {/* Student Markers */}
            {studentsMarker.length !== 0 &&
              studentsMarker.map((e, i) => {
                return (
                  <Marker
                    position={[e.latitude, e.longitude]}
                    key={`marker key - ${i}`}
                  >
                    <Popup>{e.trackingID}</Popup>
                  </Marker>
                );
              })}
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
