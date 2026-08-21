import noProfileImg from "/assets/student-male.png";
import { StudentsRecordStorage } from "../../../../../storage/StudentsRecordStorage";
import { useSearchParams } from "react-router-dom";
function StudentsAlertInfo({
  image,
  firstName,
  middleName,
  lastName,
  trackingID,
  house,
  lastTransmistedDate,
  trackingState,
  watchTime,
}: {
  image: string | null;
  firstName: string;
  middleName: string;
  lastName: string;
  trackingID: string;
  house: string;
  watchTime: string;
  trackingState: number;
  lastTransmistedDate: string;
}): React.ReactElement {
  const [_, setSearchParams] = useSearchParams();
  const studentDataApi = StudentsRecordStorage();
  const { setTrackingID } = studentDataApi;
  //
  function toTrackingPage(): void {
    const page = "students/tracking";
    setSearchParams({
      section: `${page}`,
    });
  }
  //
  function trackStudent(): void {
    setTrackingID(trackingID);
    toTrackingPage();
  }
  return (
    <section className="w-full h-16  grid grid-cols-[25%_25%_12%_10%_15%_7%_6%] border border-body-color">
      <span className="flex gap-4 pl-2 p-1 items-center font-medium border-r border-body-color ">
        <span className="min-w-13 min-h-13 max-w-13 max-h-13 rounded-full ">
          <img
            className="w-full h-full rounded-full"
            src={image ? image : noProfileImg}
          ></img>
        </span>
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          {firstName} {middleName} {lastName}
        </h5>
      </span>
      <span className="flex pl-2 pr-2  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          {trackingID}
        </h5>
      </span>
      <span className="flex pl-2  pr-2 overflow-hidden  items-center font-medium border-r border-body-color">
        {trackingState === 0 && (
          <span className="flex items-center text-black p-2 w-fit h-8 rounded-xl bg-[#8d0da7d3]">
            <i className="fa fa-question"></i>
            <h5 className=" font-medium min16Max18px line-clamp-1">unkown</h5>
          </span>
        )}
        {trackingState === 1 && (
          <span className="flex items-center text-black p-2 w-fit h-8 rounded-xl bg-[#0da70dd3]">
            <i className="fa fa-check"></i>
            <h5 className=" font-medium min16Max18px line-clamp-1">stable</h5>
          </span>
        )}
        {trackingState === 2 && (
          <span className="flex items-center text-black p-2 w-fit h-8 rounded-xl bg-[#ffa600e5]">
            <i className="fa fa-triangle-exclamation"></i>
            <h5 className=" font-medium min16Max18px line-clamp-1">warning</h5>
          </span>
        )}
        {trackingState === 3 && (
          <span className="flex items-center text-black p-2 w-fit h-8 rounded-xl bg-[#ff0000d2]">
            <i className="fa fa-xmark"></i>
            <h5 className=" font-medium min16Max18px line-clamp-1">panic</h5>
          </span>
        )}
      </span>
      <span className="flex pl-2  pr-2 overflow-hidden  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          {house}
        </h5>
      </span>
      <span className="flex pl-2  pr-2 overflow-hidden  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          {lastTransmistedDate}
        </h5>
      </span>
      <span className="flex pl-2  pr-2 overflow-hidden  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          {watchTime}
        </h5>
      </span>
      <span className="flex pointer pl-2  pr-2 overflow-hidden  justify-center items-center font-medium ">
        <span
          className="flex items-center text-black p-2 w-fit h-8 rounded-xl bg-[#4b4be9]"
          onClick={trackStudent}
        >
          <i className="fa fa-location"></i>
        </span>
      </span>
    </section>
  );
}
export default StudentsAlertInfo;
