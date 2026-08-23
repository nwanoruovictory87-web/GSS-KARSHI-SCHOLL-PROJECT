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
interface ImportantAlertsData {
  trackingID: string;
  watchTime: string;
  trackingState: number;
}
interface AlertsCountsData {
  panicCount: number;
  warningCount: number;
  stableCount: number;
}
interface StudentsDailyGraphData {
  total: number;
  resumed: number;
  active: number;
  inActive: number;
}
interface Data {
  alertsCountData: AlertsCountsData;
  importantAlertsData: ImportantAlertsData[] | [];
  studentsDailyGraphData: StudentsDailyGraphData;
  studentsHiglightsData: {
    total: number;
    resumed: number;
    active: number;
    inActive: number;
  };
}
interface Records {
  records: StudentsData[] | [];
  setRecords: React.Dispatch<React.SetStateAction<StudentsData[]>>;
  trackingID: string | null;
  setTrackingID: React.Dispatch<React.SetStateAction<string | null>>;
  overviewData: Data | undefined;
  setOverviewData: React.Dispatch<React.SetStateAction<Data | undefined>>;
}
const StudentsContextData = createContext<Records>({
  records: [],
  setRecords: () => {},
  trackingID: null,
  setTrackingID: () => {},
  overviewData: undefined,
  setOverviewData: () => {},
});
export function StudentsRecordProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [records, setRecords] = useState<StudentsData[] | []>([]);
  const [trackingID, setTrackingID] = useState<string | null>("");
  const [overviewData, setOverviewData] = useState<Data | undefined>({
    alertsCountData: {
      panicCount: 0,
      warningCount: 0,
      stableCount: 0,
    },
    importantAlertsData: [],
    studentsDailyGraphData: {
      total: 0,
      resumed: 0,
      active: 0,
      inActive: 0,
    },
    studentsHiglightsData: {
      total: 0,
      resumed: 0,
      active: 0,
      inActive: 0,
    },
  });
  return (
    <StudentsContextData.Provider
      value={{
        records,
        setRecords,
        trackingID,
        setTrackingID,
        overviewData,
        setOverviewData,
      }}
    >
      {children}
    </StudentsContextData.Provider>
  );
}
export const StudentsRecordStorage = () => useContext(StudentsContextData);
