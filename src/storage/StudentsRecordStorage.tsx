import { createContext, useContext, useState } from "react";
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
interface Records {
  records: StudentsData[] | [];
  setRecords: React.Dispatch<React.SetStateAction<StudentsData[]>>;
}
const StudentsContextData = createContext<Records>({
  records: [],
  setRecords: () => {},
});
export function StudentsRecordProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [records, setRecords] = useState<StudentsData[] | []>([]);
  return (
    <StudentsContextData.Provider
      value={{
        records,
        setRecords,
      }}
    >
      {children}
    </StudentsContextData.Provider>
  );
}
export const StudentsRecordStorage = () => useContext(StudentsContextData);
