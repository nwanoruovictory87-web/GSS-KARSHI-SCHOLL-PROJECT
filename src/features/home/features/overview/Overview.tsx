import StudentsHiglights from "./components/StudentsHiglights";
import BodyContent from "./components/bodyConetent/BodyContent";
import { SocketApi } from "../../../../storage/Socket";
import { GetGpsLocation } from "../../shared/Gps";
function Overview() {
  const socketInstance = SocketApi();
  console.log("non event blocking");
  GetGpsLocation()
    .then((value) => {
      console.log("success");
      console.log(value);
    })
    .catch((error) => {
      console.log("got an error", error);
    });
  console.log("non event blocking 2");
  return (
    <div className="w-full h-full component-spacing flex flex-col gap-7  relative ">
      <StudentsHiglights />
      <BodyContent />
    </div>
  );
}
export default Overview;
