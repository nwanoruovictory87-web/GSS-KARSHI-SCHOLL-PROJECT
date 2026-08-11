import { MapContainer, Marker } from "react-leaflet";
import OfflineTileLayer from "./OfflineTileLayer";
import "leaflet/dist/leaflet.css";
function AllStudentsTracking(): React.ReactElement {
  return (
    <div className="component-spacing w-full h-full  relative">
      <div className="w-full h-full pb-12">
        <MapContainer
          center={[51.505, -0.2]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <OfflineTileLayer />
          {/* Our custom layer handles both tile rendering and offline storage */}
          <Marker position={[51.505, -0.2]}></Marker>
          <Marker position={[51.505, -0.21]}></Marker>
          <Marker position={[51.505, -0.002]}></Marker>
        </MapContainer>
      </div>
    </div>
  );
}
export default AllStudentsTracking;
