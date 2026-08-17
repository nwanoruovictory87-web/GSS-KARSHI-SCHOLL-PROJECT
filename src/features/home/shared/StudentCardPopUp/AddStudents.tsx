import StudentInfo from "./components/StudentInfo";
import DayOrBoadingOption from "./components/DayOrBoadingOption";
function AddStudents({ control }: { control: () => void }): React.ReactElement {
  return (
    <article className="w-full h-screen transition-all bg-[#63606027] rounded-xl component-spacing absolute top-0 z-10 ">
      <section className="w-full h-full flex justify-center items-center">
        <div className="w-[60%] h-full max-h-[80%]  overflow-hidden -mt-10 bg-white rounded-xl border-2 border-body-color">
          {/**cancule button */}
          <div className="w-full h-fit flex justify-end p-3">
            <i
              className="fa fa-xmark text-[24px] text-pramary-dark-blue pointer"
              onClick={control}
            ></i>
          </div>
          <div className="w-full h-full  overflow-y-auto">
            {/**students infor */}
            <StudentInfo />
            {/**day or bording */}
            <DayOrBoadingOption />
            {/**students infor */}
            <StudentInfo />
          </div>
        </div>
      </section>
    </article>
  );
}
export default AddStudents;
