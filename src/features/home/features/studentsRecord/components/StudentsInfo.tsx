import { useState } from "react";
import ViewStudent from "./StudentCardPopUp/ViewStudent";
import LoadingAnimation from "../../../shared/LoadingAnimation";
import { deleteStudent } from "../api/StudentsRecordApi";
import { StudentsRecordStorage } from "../../../../../storage/StudentsRecordStorage";
import noProfileImg from "/assets/student-male.png";
function StudentsInfo({
  image,
  firstName,
  middleName,
  lastName,
  day,
  bording,
  trackingID,
  gender,
  house,
  year,
  age,
  dateOfBirth,
}: {
  image: string | null;
  firstName: string;
  middleName: string;
  lastName: string;
  trackingID: string;
  day: boolean;
  bording: boolean;
  gender: string;
  house: string;
  year: string;
  age: string;
  dateOfBirth: string;
}): React.ReactElement {
  const studentsRecord = StudentsRecordStorage();
  const { setRecords } = studentsRecord;
  const [viewMode, setViewMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //
  function deleteStudentData(trackingID: string) {
    setIsLoading(true);
    deleteStudent(trackingID)
      .then((data) => {
        alert(data.message);
        setIsLoading(false);
        setRecords((prevRecords) => {
          return prevRecords.filter((data) => {
            if (data.trackingID != trackingID) return data;
          });
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        setIsLoading(false);
      });
  }
  return (
    <>
      <section className="w-full h-15  grid grid-cols-[28%_25%_12%_10%_10%_15%] border border-body-color">
        <span className="flex gap-4 pl-2 p-1 pr-2  items-center font-medium border-r border-body-color ">
          <span className="min-w-13 min-h-13 max-w-13 max-h-13 rounded-full ">
            <img
              className="min-w-13 min-h-13 max-w-13 max-h-13 rounded-full"
              src={image ? image : noProfileImg}
            ></img>
          </span>
          <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
            {firstName} {middleName} {lastName}
          </h5>
        </span>
        <span className="flex pl-2 p-1 pr-2  items-center font-medium border-r border-body-color">
          <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
            {trackingID}
          </h5>
        </span>
        <span className="flex pl-2 p-1 pr-2  items-center font-medium border-r border-body-color">
          <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
            {gender}
          </h5>
        </span>
        <span className="flex pl-2 p-1 pr-2  items-center font-medium border-r border-body-color">
          <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
            {house}
          </h5>
        </span>
        <span className="flex pl-2 p-1 pr-2  items-center font-medium border-r border-body-color">
          <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
            {year}
          </h5>
        </span>
        <span className="grid grid-cols-3 gap-1 pl-2 p-1 pr-2 text-text-color  items-center font-medium ">
          <span className="p-2 pointer rounded-xs bg-blue-700 text-center">
            <i className="fa fa-pen"></i>
          </span>
          <span
            className="p-2 pointer rounded-xs bg-green-700 text-center"
            onClick={() => setViewMode(true)}
          >
            <i className="fa fa-eye"></i>
          </span>
          <span
            className="p-2 pointer rounded-xs bg-red-700 text-center"
            onClick={() => deleteStudentData(trackingID)}
          >
            <i className="fa fa-trash"></i>
          </span>
        </span>
      </section>
      {viewMode && (
        <ViewStudent
          control={() => {
            setViewMode(false);
          }}
          day={day}
          bording={bording}
          trackingID={trackingID}
          firstName={firstName}
          middleName={middleName}
          lastName={lastName}
          age={age}
          dateOfBirth={dateOfBirth}
          gender={gender}
          house={house}
          year={year}
          image={image}
        />
      )}
      {isLoading && <LoadingAnimation />}
    </>
  );
}
export default StudentsInfo;
