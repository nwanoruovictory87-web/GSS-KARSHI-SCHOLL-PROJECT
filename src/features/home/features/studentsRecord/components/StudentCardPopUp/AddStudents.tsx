import { useState } from "react";
import {
  getNewTrackingId,
  createNewStudentsData,
} from "../../api/StudentsRecordApi";
import StudentInfo from "./components/StudentInfo";
import DayOrBoadingOption from "./components/DayOrBoadingOption";
import LoadingAnimation from "../../../../shared/LoadingAnimation";
interface StudentsInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  dateOfBirth: string;
  gender: string;
  house: string;
  year: string;
}
interface StudentsDataInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  dateOfBirth: string;
  gender: string;
  house: string;
  year: string;
  dayStudent: number;
  bordingStudent: number;
  trackingID: string;
  image: null;
}
function AddStudents({
  control,
  readOnly,
}: {
  control: () => void;
  readOnly: number;
}): React.ReactElement {
  const [validateInput, setValidateInput] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [trackingID, setTrackingID] = useState<string>(
    "***************************",
  );
  const [saveData, setSaveData] = useState<boolean>(false);
  const [isTrackingID, setIsTrackingID] = useState<boolean>(false);
  const [day, setDay] = useState<boolean>(false);
  const [bording, setBording] = useState<boolean>(false);
  const [loadingAnimation, setLoadingAnimation] = useState<boolean>(false);
  //
  function getTrackingId(inputState: number): void {
    if (inputState == 0) {
      setValidateInput(1);
      return;
    } else if (inputState == 2) {
      setValidateInput(0);
      return;
    } else {
      setValidateInput(0);
    }
    if ((!day && !bording) || (day && bording)) return;
    setIsLoading(true);
    getNewTrackingId()
      .then((data) => {
        //alert(data.message);
        setTrackingID(data.ID);
        setIsLoading(false);
        setSaveData(true);
      })
      .catch((error) => {
        console.log(`error ${error}`);
        setIsLoading(false);
      });
  }
  async function saveDataToDb(studentInfo: StudentsDataInfo) {
    try {
      setLoadingAnimation(true);
      setIsTrackingID(false);
      //console.log(studentInfo);
      createNewStudentsData({ studentData: studentInfo })
        .then((responds) => {
          const res: {
            message: string;
            ok: boolean;
          } = responds;
          alert(res.message);
          control();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(`error ${error}`);
    }
  }
  function validateSaveInputFunc(
    result: number,
    studentsInfo: StudentsInfo | null,
  ): void {
    if (result == 0) {
      setValidateInput(1);
      return;
    } else if (result == 2) {
      setValidateInput(0);
      return;
    } else {
      setValidateInput(0);
    }
    if ((!day && !bording) || (day && bording)) return;
    if (!studentsInfo) return;
    saveDataToDb({
      ...studentsInfo,
      trackingID: trackingID,
      dayStudent: day ? 1 : 0,
      bordingStudent: bording ? 1 : 0,
      image: null,
    });
  }
  return (
    <article className="w-full h-screen transition-all bg-[#63606027] rounded-xl component-spacing absolute top-0 z-10 ">
      <div className="w-full h-full relative">
        <section className="w-full h-full flex justify-center items-center ">
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
              <StudentInfo
                readonly={readOnly}
                validateInput={validateInput}
                validateInputFunc={getTrackingId}
                saveData={isTrackingID}
                validateSaveInputFunc={validateSaveInputFunc}
              />
              {/**day or bording */}
              <DayOrBoadingOption setDay={setDay} setBording={setBording} />
              {/**action  */}
              <div className="mt-2 flex justify-center text-center">
                <div className="flex flex-col gap-2">
                  {/**tracking ID */}
                  <span className="flex flex-col gap-1">
                    <h5 className="text-[20px] font-sans font-semibold">
                      Tracking ID
                    </h5>
                    {isLoading ? (
                      <span className="w-75 h-fit block rounded-full border border-body-color pl-1">
                        <span className="w-0 h-4 block rounded-full  first-inner-child bg-pramary-dark-blue">
                          <span className="w-0 h-4 block  second-inner-child bg-white "></span>
                        </span>
                      </span>
                    ) : (
                      <h5 className="font-sans font-medium text-[16px]">
                        {trackingID}
                      </h5>
                    )}
                  </span>
                  {/**action button */}
                  <div className="flex justify-center mt-2">
                    {saveData ? (
                      <button
                        className="w-fit h-fit p-4 rounded-3xl  bg-[#089408] hover:bg-[#51df51] transition-all pointer text-center button-shadow"
                        onClick={() => setIsTrackingID(true)}
                      >
                        <h5 className="text-[16px] font-sans font-semibold text-text-color">
                          Save Data
                        </h5>
                      </button>
                    ) : (
                      <button
                        className="w-fit h-fit p-4 rounded-3xl  bg-[#4646d1] hover:bg-[#9b9beb] transition-all pointer text-center button-shadow"
                        onClick={() => getTrackingId(0)}
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
        {/**loading data */}
        {loadingAnimation && <LoadingAnimation />}
      </div>
    </article>
  );
}
export default AddStudents;
