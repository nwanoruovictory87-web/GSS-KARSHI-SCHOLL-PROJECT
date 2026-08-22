import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayersControl,
} from "react-leaflet";
import L from "leaflet";
import gpsLoading from "/assets/PlanetWorldPreloader.gif";
import "leaflet/dist/leaflet.css";

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

function Map({
  latitude,
  longtitude,
  trackingID,
}: {
  latitude?: number;
  longtitude?: number;
  trackingID?: string;
}): React.ReactElement {
  // ... the rest of your component code stays exactly the same as before
  return (
    <section className="rounded-t-xl  border border-text-color bg-pramary-dark-blue w-full h-[60%]   relative">
      <div className="w-full h-full  flex flex-col max-h-full  rounded-xl">
        <span className="w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
          <h5 className="min16Max18px text-black font-medium">
            Student Location (Map)
          </h5>
        </span>
        <div className="w-full h-full relative">
          {latitude && longtitude && trackingID ? (
            <MapContainer
              center={[latitude, longtitude]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "100%" }}
              // FIX 2: Added maxZoom container expansion to support clean Google zooming limits
              maxZoom={21}
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
                    url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                    subdomains={["mt0", "mt1", "mt2", "mt3"]}
                    maxZoom={21}
                    maxNativeZoom={20}
                  />
                </LayersControl.BaseLayer>

                {/* 2. OpenStreetMap fallback */}
                <LayersControl.BaseLayer name="OpenStreetMap">
                  <TileLayer
                    attribution='&copy; <a href="https://openstreetmap.org" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={21}
                    maxNativeZoom={19}
                  />
                </LayersControl.BaseLayer>
              </LayersControl>
              {/* Student Markers */}
              <Marker position={[latitude, longtitude]}>
                <Popup>{trackingID}</Popup>
              </Marker>
            </MapContainer>
          ) : (
            <span className="flex h-full justify-center items-center">
              <div className="w-37.5 ">
                <img
                  className="w-full h-full"
                  src={gpsLoading}
                  alt="Loading..."
                ></img>
              </div>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default Map;
