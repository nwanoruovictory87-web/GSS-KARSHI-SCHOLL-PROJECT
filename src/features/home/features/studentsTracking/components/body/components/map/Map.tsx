import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { GetGpsLocation } from "../../../../../../shared/Gps";
import gpsLoading from "/assets/PlanetWorldPreloader.gif";
import "leaflet/dist/leaflet.css";
function Map(): React.ReactElement {
  const [isDevicesLocation, setIsDevicesLocation] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number>(0);
  const [longtitude, setLongtitude] = useState<number>(0);
  useEffect(() => {
    let errorCode = 0;
    let shouldAbort = false; //abort retry location connection control
    function getLocation() {
      console.log(shouldAbort);
      if (shouldAbort) return;
      GetGpsLocation()
        .then((location) => {
          setLatitude(location.latitude);
          setLongtitude(location.longitude);
          setIsDevicesLocation(true);
        })
        .catch((error) => {
          console.error("Error getting location:", error);
          setIsDevicesLocation(false);
          errorCode = error.status;
          setTimeout(() => {
            if (!isDevicesLocation && errorCode === 303) {
              getLocation();
            }
          }, 5000);
          // Retry after 5 seconds
        });
    }
    getLocation();
    //
    return () => {
      //console.log("clean up");
      shouldAbort = true;
    };
  }, []);
  return (
    <section className="rounded-t-xl  border border-text-color bg-pramary-dark-blue w-full h-[60%]   relative">
      <div className="w-full h-full  flex flex-col max-h-full  rounded-xl">
        <span className="w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
          <h5 className="min16Max18px text-black font-medium">
            Student Location (Map)
          </h5>
        </span>
        <div className="w-full h-full relative">
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
            </MapContainer>
          ) : (
            <span className="flex h-full justify-center items-center">
              <div className="w-37.5 ">
                <img className="w-full h-full" src={gpsLoading}></img>
              </div>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default Map;
