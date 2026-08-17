import StudentsHiglights from "./components/StudentsHiglights";
import BodyContent from "./components/bodyConetent/BodyContent";
import { SocketApi } from "../../../../storage/Socket";
import { GetGpsLocation } from "../../shared/Gps";
function Overview() {
  const socketInstance = SocketApi();
  return (
    <div className="w-full h-full overflow-y-auto component-spacing flex flex-col gap-7  relative ">
      <StudentsHiglights />
      <BodyContent />
    </div>
  );
}
export default Overview;
