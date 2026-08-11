import Filter from "./components/Filter";
import Body from "./components/body/Body";
function StudentsTracking(): React.ReactElement {
  return (
    <div className="w-full h-full component-spacing relative overflow-hidden">
      <Filter />
      <div className="mt-7 w-full h-full  relative pb-31 ">
        <Body />
      </div>
    </div>
  );
}
export default StudentsTracking;
