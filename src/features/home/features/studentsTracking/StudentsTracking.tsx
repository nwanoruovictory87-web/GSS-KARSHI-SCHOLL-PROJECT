import Filter from "./components/Filter";
import Body from "./components/body/Body";
import { getStudentWithIDTrackingData } from "./api/TrackingApi";
import { useEffect, useState } from "react";
import { StudentsRecordStorage } from "../../../../storage/StudentsRecordStorage";
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
  lastTransmistedDate: string;
  trackingState: number;
  watchInfo: {
    batteryPercent: string;
    watchTime: string;
    watchDate: string;
  };
  locationInfo: {
    locationAccuracy: number;
    lastTransmistedDate: Date;
    lastThreeKnownLocation: any[];
  };
}
function StudentsTracking(): React.ReactElement {
  const studentDataApi = StudentsRecordStorage();
  const { trackingID, setTrackingID } = studentDataApi;
  const [trackingIDInput, setTrackingIdInput] = useState<string>("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //
  function getTrackingData(ID?: string) {
    if (trackingIDInput.trim() === "" && !ID) return;
    if (isLoading) return;
    setIsLoading(true);
    if (trackingIDInput.trim() !== "" && trackingIDInput != trackingID) {
      setTrackingID(trackingIDInput);
    }
    setTrackingData(null);
    getStudentWithIDTrackingData(ID ? ID : trackingIDInput.trim())
      .then((data) => {
        setTrackingData(data.record);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  }
  //
  useEffect(() => {
    console.log(trackingID);
    if (trackingID) {
      setTrackingIdInput(trackingID);
      getTrackingData(trackingID);
    }
  }, []);
  return (
    <div className="w-full h-150  overflow-y-auto  component-spacing relative overflow-hidden">
      <Filter
        searchDB={getTrackingData}
        input={trackingIDInput}
        setInput={setTrackingIdInput}
      />
      <div className="mt-7 w-full h-full  relative mb-10 ">
        <Body trackingData={trackingData} isLoading={isLoading} />
      </div>
    </div>
  );
}
export default StudentsTracking;
