import { useState, useEffect } from "react";
import StudentsInfo from "./StudentsInfo";
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
  const [studentsRecordsList, setStudentsRecirdList] = useState<StudentsData[]>(
    [],
  );
  //
  useEffect(() => {
    getStudentsRecords()
      .then((data) => {
        setStudentsRecirdList(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //
  return (
    <div className=" w-full h-full overflow-y-scroll pb-12 ">
      {/** */}
      <div className="w-full flex flex-col  border-r border-r-body-color border-l border-l-body-coborder-r-body-color ">
        {studentsRecordsList.map((data: StudentsData) => {
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
            />
          );
        })}
      </div>
    </div>
  );
}
export default List;
