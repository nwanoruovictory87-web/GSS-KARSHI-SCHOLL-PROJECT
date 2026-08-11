import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.offline"; // Modifies the global L object

const OfflineTileLayer = () => {
  const map = useMap(); // Access the raw Leaflet map instance

  useEffect(() => {
    if (!map) return;

    // 1. Define the offline tile layer
    // @ts-ignore (if using TypeScript)
    const offlineLayer = L.tileLayer.offline(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "&copy; OpenStreetMap contributors",
        minZoom: 1,
        maxZoom: 18,
      },
    );

    // Add it to the map
    offlineLayer.addTo(map);

    // 2. Add the "Save Tiles" UI button to the map control area
    // @ts-ignore
    const saveControl = L.control.savetiles(offlineLayer, {
      zoomlevels: [13, 14, 15], // Restrict zooms to save space
      confirm(layer: any, successCallback: any) {
        if (
          window.confirm(
            `Save ${layer._tilesToSave.length} tiles for offline use?`,
          )
        ) {
          successCallback();
        }
      },
      statusText: "Saving...",
    });

    saveControl.addTo(map);

    // Cleanup when component unmounts
    return () => {
      map.removeLayer(offlineLayer);
      map.removeControl(saveControl);
    };
  }, [map]);

  return null;
};

export default OfflineTileLayer;
