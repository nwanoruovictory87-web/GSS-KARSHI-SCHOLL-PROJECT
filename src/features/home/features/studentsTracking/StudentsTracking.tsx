import Filter from "./components/Filter";
import Body from "./components/body/Body";
import { getStudentWithIDTrackingData } from "./api/TrackingApi";
function StudentsTracking(): React.ReactElement {
  getStudentWithIDTrackingData("725ffbc0-c00c-4d37-b6eb-a450feb671af")
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className="w-full h-150  overflow-y-auto  component-spacing relative overflow-hidden">
      <Filter />
      <div className="mt-7 w-full h-full  relative mb-10 ">
        <Body />
      </div>
    </div>
  );
}
export default StudentsTracking;
