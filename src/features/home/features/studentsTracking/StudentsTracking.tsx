import Filter from "./components/Filter";
import Body from "./components/body/Body";
import { getStudentWithIDTrackingData } from "./api/TrackingApi";
import { useState } from "react";
interface TrackingData {
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  dateOfBirth: string;
  gender: string;
  house: string;
  year: string;
  dayStudent: number;
  bordingStudent: number;
  image: null;
  trackingID: string;
  latitude: number;
  longitude: number;
  accuracy: number;
  watchInfo: {
    batteryPercent: string;
    watchTime: string;
    watchDate: Date;
  };
  locationInfo: {
    locationAccuracy: number;
    lastTransmistedDate: Date;
    lastThreeKnownLocation: any[];
  };
}
function StudentsTracking(): React.ReactElement {
  const [trackingIDInput, setTrackingIdInput] = useState<string>("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  //
  function getTrackingData() {
    console.log(trackingIDInput);
    getStudentWithIDTrackingData(trackingIDInput.trim())
      .then((data) => {
        console.log(data);
        setTrackingData(data.record);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div className="w-full h-150  overflow-y-auto  component-spacing relative overflow-hidden">
      <Filter
        searchDB={getTrackingData}
        input={trackingIDInput}
        setInput={setTrackingIdInput}
      />
      <div className="mt-7 w-full h-full  relative mb-10 ">
        <Body trackingData={trackingData} />
      </div>
    </div>
  );
}
export default StudentsTracking;
