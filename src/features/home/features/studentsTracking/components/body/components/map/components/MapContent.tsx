import { MapContainer, Marker } from "react-leaflet";
//import OfflineTileLayer from "../../../../../../allStudentsTracking/OfflineTileLayer";
import "leaflet/dist/leaflet.css";
function MapContent(): React.ReactElement {
  return (
    <div className="w-full h-full ">
      <MapContainer
        center={[51.505, -0.2]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Our custom layer handles both tile rendering and offline storage */}
        <Marker position={[51.505, -0.2]}></Marker>
      </MapContainer>
    </div>
  );
}
export default MapContent;
