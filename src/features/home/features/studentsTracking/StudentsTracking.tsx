import Filter from "./components/Filter";
import Body from "./components/body/Body";
import { getStudentWithIDTrackingData, getAiOverview } from "./api/TrackingApi";
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
  const [aiOverview, setAiOverview] = useState<string | null>(null);
  //
  function getAiOverviewDetails(trackingData: TrackingData) {
    const currentData = `${
      new Date().getDate() >= 10
        ? new Date().getDate()
        : `0${new Date().getDate()}`
    } / ${new Date().getMonth() + 1 >= 10 ? new Date().getMonth() + 1 : `0${new Date().getMonth() + 1}`}/${new Date().getFullYear()}`;
    const aiRequstData = {
      fullName: `${trackingData.firstName} ${trackingData.middleName} ${trackingData.lastName}`,
      age: trackingData.age,
      gender: trackingData.gender,
      schoolHouse: trackingData.house,
      watchBattery: trackingData.watchInfo.batteryPercent,
      lat: trackingData.latitude,
      lng: trackingData.longitude,
      watchDate: trackingData.watchInfo.watchDate,
      watchTime: trackingData.watchInfo.watchTime,
      currentDate: `${currentData}`,
    };
    getAiOverview({ studentsTrackingData: aiRequstData })
      .then((responds) => {
        //console.log(responds);
        setAiOverview(responds.text);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getTrackingData(ID?: string) {
    if (trackingIDInput.trim() === "" && !ID) return;
    if (isLoading) return;
    setIsLoading(true);
    if (trackingIDInput.trim() !== "" && trackingIDInput != trackingID) {
      setTrackingID(trackingIDInput);
    }
    setTrackingData(null);
    setAiOverview(null);
    getStudentWithIDTrackingData(ID ? ID : trackingIDInput.trim())
      .then((data) => {
        setTrackingData(data.record);
        setIsLoading(false);
        if (data.record.latitude) {
          getAiOverviewDetails(data.record);
        }
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  }
  //
  useEffect(() => {
    //console.log(trackingID);
    if (trackingID) {
      setTrackingIdInput(trackingID);
      getTrackingData(trackingID);
    }
  }, []);
  //

  return (
    <div className="w-full  h-full flex flex-col overflow-y-auto  component-spacing relative overflow-hidden">
      <Filter
        searchDB={getTrackingData}
        input={trackingIDInput}
        setInput={setTrackingIdInput}
      />
      <div className="mt-7 w-full  h-full relative mb-10 ">
        <Body
          trackingData={trackingData}
          aiOverview={aiOverview}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
export default StudentsTracking;
