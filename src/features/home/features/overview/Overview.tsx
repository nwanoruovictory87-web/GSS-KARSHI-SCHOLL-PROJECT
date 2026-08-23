import StudentsHiglights from "./components/StudentsHiglights";
import BodyContent from "./components/bodyConetent/BodyContent";
import { SocketApi } from "../../../../storage/Socket";
import { StudentsRecordStorage } from "../../../../storage/StudentsRecordStorage";
import { useEffect } from "react";
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
function Overview() {
  const socketInstance = SocketApi();
  const studentsData = StudentsRecordStorage();
  const { socket } = socketInstance;
  const { overviewData, setOverviewData } = studentsData;
  if (!overviewData) return;
  //send requst overview ping
  useEffect(() => {
    if (!socket) return;
    const requstDataTimer = setInterval(() => {
      socket.emit("get-overview-data");
    }, 30000); // every 30s
    socket.emit("get-overview-data");
    //console.log("test");
    //
    return () => {
      clearInterval(requstDataTimer);
    };
  }, [socket]);
  //listen on data responds
  useEffect(() => {
    if (!socket) return;
    const overviewDataFunc = (data: Data) => {
      setOverviewData(data);
    };
    socket.on("send-overview-data", overviewDataFunc);
    //
    return () => {
      socket.off("send-overview-data", overviewDataFunc);
    };
  }, [socket]);
  return (
    <div className="w-full h-full overflow-y-auto component-spacing flex flex-col gap-7  relative ">
      <StudentsHiglights
        total={overviewData.studentsHiglightsData.total}
        resumed={overviewData.studentsHiglightsData.resumed}
        active={overviewData.studentsHiglightsData.active}
        inActive={overviewData.studentsHiglightsData.inActive}
      />
      <BodyContent bodyContentData={overviewData} />
    </div>
  );
}
export default Overview;
