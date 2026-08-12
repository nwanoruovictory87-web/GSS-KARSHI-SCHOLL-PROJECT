import StudentsHiglights from "./components/StudentsHiglights";
import BodyContent from "./components/bodyConetent/BodyContent";
import { SocketApi } from "../../../../storage/Socket";
import { GetGpsLocation } from "../../shared/Gps";
function Overview() {
  const socketInstance = SocketApi();
  GetGpsLocation(
    (position) => {
      console.log("got position");
      console.log(position);
    },
    (error, statusCode) => {
      console.log(error, statusCode);
    },
  );
  return (
    <div className="w-full h-full component-spacing flex flex-col gap-7  relative ">
      <StudentsHiglights />
      <BodyContent />
    </div>
  );
}
export default Overview;
