import { useState, useEffect } from "react";
import { StudentsRecordStorage } from "../../../../../storage/StudentsRecordStorage";
import StudentsInfo from "./StudentsInfo";
import LStudentInfo from "./LStudentsInfo";
import { getStudentsRecords } from "../api/StudentsRecordApi";
interface StudentsData {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  dateOfBirth: string;
  gender: string;
  house: string;
  dayStudent: number;
  bordingStudent: number;
  trackingID: string;
  image: null;
  studentYear: string;
  createdAt: Date;
  __v: number;
}
function List(): React.ReactElement {
  const studentsRecord = StudentsRecordStorage();
  const { records, setRecords } = studentsRecord;
  const [studentsRecordsList, setStudentsRecirdList] = useState<
    StudentsData[] | []
  >([]);
  //

  useEffect(() => {
    if (records.length > 0) return;
    getStudentsRecords()
      .then((data) => {
        setRecords(data.records);
        //console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //
  useEffect(() => {
    (() => {
      setStudentsRecirdList(records);
    })();
  }, [records, records.length]);
  return (
    <div className=" w-full h-full overflow-y-scroll pb-12 ">
      {/** */}
      <div className="w-full flex flex-col  border-r border-r-body-color border-l border-l-body-coborder-r-body-color ">
        {setStudentsRecirdList.length != 0
          ? studentsRecordsList.map((data: StudentsData) => {
              return (
                <StudentsInfo
                  image={data.image}
                  firstName={data.firstName}
                  middleName={data.middleName}
                  lastName={data.lastName}
                  house={data.house}
                  trackingID={data.trackingID}
                  gender={data.gender}
                  year={data.studentYear}
                  key={data.trackingID}
                  dateOfBirth={data.dateOfBirth}
                  day={data.dayStudent > 0 ? true : false}
                  bording={data.bordingStudent > 0 ? true : false}
                  age={data.age}
                />
              );
            })
          : Array.from({ length: 40 }).map(() => {
              return <LStudentInfo />;
            })}
      </div>
    </div>
  );
}
export default List;
