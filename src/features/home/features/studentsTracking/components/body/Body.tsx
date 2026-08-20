import StudentInfo from "./components/studentinfo/StudentInfo";
import Map from "./components/map/Map";
import WacthInfo from "./components/watchInfo/WatchInfo";
import StudentsLocation from "./components/studentLocationInfo/StudentsLocation";
function Body(): React.ReactElement {
  return (
    <article className="w-full min-h-142 h-full  flex gap-7 ">
      <StudentInfo />
      <section className="w-[70%] h-full rounded-xl flex flex-col gap-7 ">
        <Map />
        <article className="w-full h-[40%]  flex gap-7">
          <WacthInfo />
          <StudentsLocation />
        </article>
      </section>
    </article>
  );
}
export default Body;
