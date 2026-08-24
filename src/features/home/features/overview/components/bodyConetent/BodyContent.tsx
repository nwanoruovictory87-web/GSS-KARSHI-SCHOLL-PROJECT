import StudentsLineGraph from "./components/StudentsLineGraph";
import AlertsCounts from "./components/AlertsCounts";
import ImportantAlerts from "./components/ImportantAlerts";
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
interface BodyContentData {
  alertsCountData: AlertsCountsData;
  importantAlertsData: ImportantAlertsData[] | [];
  studentsDailyGraphData: StudentsDailyGraphData;
}
function BodyContent({
  bodyContentData,
}: {
  bodyContentData: BodyContentData;
}) {
  return (
    <div className="w-full h-full flex mb-15 ">
      <article className="w-[60%] min-h-125 flex flex-col bg-pramary-dark-blue rounded-xl mr-auto ">
        <div className="w-full pl-px pr-px">
          <span className="w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
            <h5 className="min16Max18px text-black font-medium">
              Student Daily Graph
            </h5>
          </span>
        </div>
        <section className="w-full h-full  flex justify-center items-center p-2 text-text-color">
          {bodyContentData.studentsDailyGraphData.total > 0 ? (
            <StudentsLineGraph
              total={bodyContentData.studentsDailyGraphData.total}
              resumed={bodyContentData.studentsDailyGraphData.resumed}
              active={bodyContentData.studentsDailyGraphData.active}
              inActive={bodyContentData.studentsDailyGraphData.inActive}
            />
          ) : (
            <div className="w-[80%] h-[80%] flex flex-col items-center gap-2">
              <div className="w-fit flex gap-5">
                <span className="block w-12 h-5 tr-skeleton"></span>
                <span className="block w-12 h-5 tr-skeleton"></span>
                <span className="block w-12 h-5 tr-skeleton"></span>
                <span className="block w-12 h-5 tr-skeleton"></span>
              </div>
              <div className="w-87.5 h-87.5 rounded-full tr-skeleton"></div>
            </div>
          )}
        </section>
      </article>
      <article className="w-[38%] h-full flex flex-col  ml-auto">
        <AlertsCounts
          panicCount={bodyContentData.alertsCountData.panicCount}
          warningCount={bodyContentData.alertsCountData.warningCount}
          stableCount={bodyContentData.alertsCountData.stableCount}
        />
        <ImportantAlerts list={bodyContentData.importantAlertsData} />
      </article>
    </div>
  );
}
export default BodyContent;
