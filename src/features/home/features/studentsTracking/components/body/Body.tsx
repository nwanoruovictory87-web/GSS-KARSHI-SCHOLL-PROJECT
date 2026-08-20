import StudentInfo from "./components/studentinfo/StudentInfo";
import Map from "./components/map/Map";
import WacthInfo from "./components/watchInfo/WatchInfo";
import StudentsLocation from "./components/studentLocationInfo/StudentsLocation";
import LStudentInfo from "./shared/loadingSections/studentinfo/StudentInfo";
import LWacthInfo from "./shared/loadingSections/watchInfo/WatchInfo";
import LStudentsLocation from "./shared/loadingSections/studentLocationInfo/StudentsLocation";
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
function Body({
  trackingData,
}: {
  trackingData: TrackingData | null;
}): React.ReactElement {
  return (
    <article className="w-full min-h-142 h-full  flex gap-7 ">
      {trackingData ? (
        <StudentInfo
          firstName={trackingData.firstName}
          middleName={trackingData.middleName}
          lastName={trackingData.lastName}
          age={trackingData.age}
          dateOfBirth={trackingData.dateOfBirth}
          gender={trackingData.gender}
          house={trackingData.house}
          image={trackingData.image}
        />
      ) : (
        <LStudentInfo />
      )}
      <section className="w-[70%] h-full rounded-xl flex flex-col gap-7 ">
        <Map
          latitude={trackingData?.latitude}
          longtitude={trackingData?.longitude}
          trackingID={trackingData?.trackingID}
        />
        <article className="w-full h-[40%]  flex gap-7">
          {trackingData ? (
            <WacthInfo
              watchDate={trackingData.watchInfo.watchDate}
              watchTime={trackingData.watchInfo.watchTime}
              batteryPercent={trackingData.watchInfo.batteryPercent}
            />
          ) : (
            <LWacthInfo />
          )}
          <StudentsLocation />
        </article>
      </section>
    </article>
  );
}
export default Body;
