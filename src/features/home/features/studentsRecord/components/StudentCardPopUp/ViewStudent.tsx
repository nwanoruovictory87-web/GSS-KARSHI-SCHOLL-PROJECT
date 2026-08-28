import StudentInfo from "./components/StudentInfo";
import DayOrBoadingOption from "./components/DayOrBoadingOption";
function ViewStudent({
  control,
  day,
  bording,
  trackingID,
  firstName,
  middleName,
  lastName,
  age,
  dateOfBirth,
  gender,
  house,
  year,
  image,
}: {
  control: () => void;
  day: boolean;
  bording: boolean;
  trackingID: string;
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  dateOfBirth: string;
  gender: string;
  house: string;
  year: string;
  image: string | null;
}): React.ReactElement {
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
                readonly={1}
                validateInput={0}
                validateInputFunc={() => {}}
                saveData={false}
                validateSaveInputFunc={() => {}}
                setFileState={() => {}}
                profilePicture={image}
                studentInfo={{
                  firstName,
                  middleName,
                  lastName,
                  age,
                  dateOfBirth,
                  gender,
                  house,
                  year,
                  image,
                }}
              />
              {/**day or bording */}
              <DayOrBoadingOption
                setDay={() => {}}
                setBording={() => {}}
                readOnly={true}
                day={day}
                bording={bording}
              />
              <div className="mt-2 flex justify-center text-center">
                <div className="flex flex-col gap-2">
                  {/**tracking ID */}
                  <span className="flex flex-col gap-1">
                    <h5 className="text-[20px] font-sans font-semibold">
                      Tracking ID
                    </h5>
                    <h5 className="font-sans font-medium text-[16px]">
                      {trackingID}
                    </h5>
                  </span>
                  {/**action button */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
export default ViewStudent;
