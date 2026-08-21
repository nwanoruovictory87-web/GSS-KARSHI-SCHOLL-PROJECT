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
  trackingID: string | null;
  setTrackingID: React.Dispatch<React.SetStateAction<string | null>>;
}
const StudentsContextData = createContext<Records>({
  records: [],
  setRecords: () => {},
  trackingID: null,
  setTrackingID: () => {},
});
export function StudentsRecordProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [records, setRecords] = useState<StudentsData[] | []>([]);
  const [trackingID, setTrackingID] = useState<string | null>("");
  return (
    <StudentsContextData.Provider
      value={{
        records,
        setRecords,
        trackingID,
        setTrackingID,
      }}
    >
      {children}
    </StudentsContextData.Provider>
  );
}
export const StudentsRecordStorage = () => useContext(StudentsContextData);
