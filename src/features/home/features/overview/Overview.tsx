import StudentsHiglights from "./components/StudentsHiglights";
import BodyContent from "./components/bodyConetent/BodyContent";
import { SocketApi } from "../../../../storage/Socket";
//import { GetGpsLocation } from "../../shared/Gps";
import { useState, useEffect } from "react";
interface ImportantAlertsData {
  trackingID: string;
  watchTime: string;
  trackingState: number;
}
interface AlertsCountsData {
  panicCount: number | null;
  warningCount: number | null;
  stableCount: number | null;
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
function Overview() {
  const [overviewData, setOverviewData] = useState<Data>({
    alertsCountData: {
      panicCount: null,
      warningCount: null,
      stableCount: null,
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
  //const socketInstance = SocketApi();
  return (
    <div className="w-full h-full overflow-y-auto component-spacing flex flex-col gap-7  relative ">
      <StudentsHiglights />
      <BodyContent bodyContentData={overviewData} />
    </div>
  );
}
export default Overview;
