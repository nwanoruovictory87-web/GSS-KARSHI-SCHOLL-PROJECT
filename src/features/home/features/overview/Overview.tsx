import StudentsHiglights from "./components/StudentsHiglights";
import BodyContent from "./components/bodyConetent/BodyContent";
function Overview() {
  return (
    <div className="w-full h-full component-spacing flex flex-col gap-7  relative">
      <StudentsHiglights />
      <BodyContent />
    </div>
  );
}
export default Overview;
