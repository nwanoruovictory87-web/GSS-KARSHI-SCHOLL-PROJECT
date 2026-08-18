import { useState } from "react";
import StudentInfo from "./components/StudentInfo";
import DayOrBoadingOption from "./components/DayOrBoadingOption";
import loadingAnimationLine from "/assets/loading-line.gif";
function AddStudents({ control }: { control: () => void }): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  function getTrackingId(): void {
    setIsLoading(true);
  }
  return (
    <article className="w-full h-screen transition-all bg-[#63606027] rounded-xl component-spacing absolute top-0 z-10 ">
      <section className="w-full h-full flex justify-center items-center">
        <div className="w-[60%] h-full max-h-[80%]   overflow-hidden -mt-15 bg-white rounded-xl border-2 border-body-color">
          {/**cancule button */}
          <div className="w-full h-fit flex justify-end p-3">
            <i
              className="fa fa-xmark text-[24px] text-pramary-dark-blue pointer"
              onClick={control}
            ></i>
          </div>
          <div className="w-full h-full  overflow-y-auto pb-30">
            {/**students infor */}
            <StudentInfo />
            {/**day or bording */}
            <DayOrBoadingOption />
            {/**action  */}
            <div className="mt-2 flex justify-center text-center">
              <div className="flex flex-col gap-2">
                {/**tracking ID */}
                <span className="flex flex-col gap-1">
                  <h5 className="text-[20px] font-sans font-semibold">
                    Tracking ID
                  </h5>
                  {isLoading ? (
                    <img className="w-75 h-20" src={loadingAnimationLine}></img>
                  ) : (
                    <h5 className="font-sans font-medium text-[16px]">
                      ***************************
                    </h5>
                  )}
                </span>
                {/**action button */}
                <div className="flex justify-center mt-2">
                  {!true ? (
                    <button className="w-fit h-fit p-4 rounded-3xl  bg-[#089408] hover:bg-[#51df51] transition-all pointer text-center button-shadow">
                      <h5 className="text-[16px] font-sans font-semibold text-text-color">
                        Save Data
                      </h5>
                    </button>
                  ) : (
                    <button
                      className="w-fit h-fit p-4 rounded-3xl  bg-[#4646d1] hover:bg-[#9b9beb] transition-all pointer text-center button-shadow"
                      onClick={getTrackingId}
                    >
                      <h5 className="text-[16px] font-sans font-semibold text-text-color">
                        Generate ID
                      </h5>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
export default AddStudents;
