import { useState, useEffect, lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
//static
import Top from "./shared/Top";
import LeftNavigationBar from "./shared/LeftNavigationBar";
//dynamic
import Overview from "./features/overview/Overview";
const Alerts = lazy(() => import("./features/alerts/Alerts"));
const StudentsRecord = lazy(
  () => import("./features/studentsRecord/StudentsRecord"),
);
const StudentsReports = lazy(
  () => import("./features/studentsReports/StudentsReports"),
);
const StudentsTracking = lazy(
  () => import("./features/studentsTracking/StudentsTracking"),
);
const AllStudentsTracking = lazy(
  () => import("./features/allStudentsTracking/AllStudentsTracking"),
);
const DevMode = lazy(() => import("./features/devMode/DevMode"));
function Home(): React.ReactElement {
  const [searchParams, _] = useSearchParams();
  const sections: string | null = searchParams.get("section");
  const [renderOverview, setRenderOverview] = useState<boolean>(true);
  const [renderAlerts, setRenderAlerts] = useState<boolean>(false);
  const [renderStudents, setRenderStudents] = useState<boolean>(false);
  const [renderReports, setRenderReports] = useState<boolean>(false);
  const [renderTracking, setRenderTracking] = useState<boolean>(false);
  const [renderAllTracking, setRenderAllTracking] = useState<boolean>(false);
  const [renderDevMode, setRenderDevMode] = useState<boolean>(false);
  useEffect(() => {
    switch (sections) {
      case "overview":
        setRenderDevMode(false);
        setRenderAllTracking(false);
        setRenderTracking(false);
        setRenderReports(false);
        setRenderStudents(false);
        setRenderAlerts(false);
        //
        setRenderOverview(true);
        break;
      case "students/alerts":
        setRenderDevMode(false);
        setRenderAllTracking(false);
        setRenderTracking(false);
        setRenderReports(false);
        setRenderStudents(false);
        setRenderOverview(false);
        //
        setRenderAlerts(true);
        break;
      case "students/info":
        setRenderDevMode(false);
        setRenderAllTracking(false);
        setRenderTracking(false);
        setRenderReports(false);
        setRenderAlerts(false);
        setRenderOverview(false);
        //
        setRenderStudents(true);
        break;
      case "students/feedback/reports":
        setRenderDevMode(false);
        setRenderAllTracking(false);
        setRenderTracking(false);
        setRenderStudents(false);
        setRenderAlerts(false);
        setRenderOverview(false);
        //
        setRenderReports(true);
        break;
      case "students/tracking":
        setRenderDevMode(false);
        setRenderAllTracking(false);
        setRenderReports(false);
        setRenderStudents(false);
        setRenderAlerts(false);
        setRenderOverview(false);
        //
        setRenderTracking(true);
        break;
      case "all/students/tracking":
        setRenderDevMode(false);
        setRenderTracking(false);
        setRenderReports(false);
        setRenderStudents(false);
        setRenderAlerts(false);
        setRenderOverview(false);
        //
        setRenderAllTracking(true);
        break;
      case "developement/mode":
        setRenderAlerts(false);
        setRenderTracking(false);
        setRenderReports(false);
        setRenderStudents(false);
        setRenderAlerts(false);
        setRenderOverview(false);
        //
        setRenderDevMode(true);
        break;
      default:
        break;
    }
  }, [sections]);
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden relative">
      <Top />
      <main className="w-full h-full max-h-full flex">
        <LeftNavigationBar />
        <article className="w-full h-full component-spacing">
          <Suspense
            fallback={
              <div className="w-[400px] h-13 bg-green-400 text-text-color">
                Loading...
              </div>
            }
          >
            {renderOverview && <Overview />}
            {renderAlerts && <Alerts />}
            {renderStudents && <StudentsRecord />}
            {renderReports && <StudentsReports />}
            {renderTracking && <StudentsTracking />}
            {renderAllTracking && <AllStudentsTracking />}
            {renderDevMode && <DevMode />}
          </Suspense>
        </article>
      </main>
    </div>
  );
}
export default Home;
