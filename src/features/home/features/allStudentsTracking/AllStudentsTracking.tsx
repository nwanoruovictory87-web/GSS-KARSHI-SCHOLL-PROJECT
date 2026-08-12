import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
//import OfflineTileLayer from "./OfflineTileLayer";
import "leaflet/dist/leaflet.css";
function AllStudentsTracking(): React.ReactElement {
  return (
    <div className="component-spacing w-full h-full  relative">
      <div className="w-full h-full pb-12">
        <MapContainer
          center={[8.81643, 7.55605]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[8.81643, 7.55605]}>
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
      </div>
    </div>
  );
}
export default AllStudentsTracking;
