import StudentsCard from "./components/StudentsCard";
import HouseMrOrMrsCard from "./components/HouseMrOrMrsCard";
function StudentInfo({
  isLoading,
}: {
  isLoading: boolean;
}): React.ReactElement {
  return (
    <section className="w-[40%] overflow-hidden max-w-100 h-full  rounded-xl bg-pramary-dark-blue border border-text-color">
      {/**student info */}
      <span className="w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
        <h5 className="min16Max18px text-black font-medium">Student Info</h5>
      </span>
      <div className="w-full h-[45%] flex flex-col component-spacing">
        <StudentsCard isLoading={isLoading} />
      </div>
      {/**bording master info */}
      <span className="w-full h-7 bg-text-color  flex justify-center">
        <h5 className="min16Max18px text-black font-medium">
          House Master/Mistress info
        </h5>
      </span>
      <div className="w-full h-[50%] flex flex-col component-spacing">
        <HouseMrOrMrsCard isLoading={isLoading} />
      </div>
    </section>
  );
}
export default StudentInfo;
