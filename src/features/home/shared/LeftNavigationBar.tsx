import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import logo from "/assets/school-logo.png";
function LeftNavigationBar(): React.ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const sections = searchParams.get("section");
  const overviewRef = useRef<HTMLDivElement | null>(null);
  const alertRef = useRef<HTMLDivElement | null>(null);
  const studentsRef = useRef<HTMLDivElement | null>(null);
  const reportsRef = useRef<HTMLDivElement | null>(null);
  const trackingRef = useRef<HTMLDivElement | null>(null);
  const allTrackingRef = useRef<HTMLDivElement | null>(null);
  const devModeRef = useRef<HTMLDivElement | null>(null);
  //
  function removeButtonActive(
    ref: React.RefObject<HTMLDivElement | null>,
  ): void {
    if (!ref.current) return;
    ref.current.classList.remove("text-gray-400");
    ref.current.classList.add("text-text-color");
  }
  function setButtonActive(ref: React.RefObject<HTMLDivElement | null>): void {
    if (!ref.current) return;
    ref.current.classList.remove("text-text-color");
    ref.current.classList.add("text-gray-400");
  }
  //
  useEffect(() => {
    if (
      !overviewRef.current ||
      !alertRef.current ||
      !studentsRef.current ||
      !reportsRef.current ||
      !trackingRef.current ||
      !allTrackingRef.current ||
      !devModeRef.current
    )
      return;
    switch (sections) {
      case "overview":
        removeButtonActive(devModeRef);
        removeButtonActive(allTrackingRef);
        removeButtonActive(trackingRef);
        removeButtonActive(reportsRef);
        removeButtonActive(studentsRef);
        removeButtonActive(alertRef);
        //
        removeButtonActive(overviewRef);
        setButtonActive(overviewRef);
        break;
      case "students/alerts":
        removeButtonActive(devModeRef);
        removeButtonActive(allTrackingRef);
        removeButtonActive(trackingRef);
        removeButtonActive(reportsRef);
        removeButtonActive(studentsRef);
        removeButtonActive(overviewRef);
        //
        removeButtonActive(alertRef);
        setButtonActive(alertRef);
        break;
      case "students/info":
        removeButtonActive(devModeRef);
        removeButtonActive(allTrackingRef);
        removeButtonActive(trackingRef);
        removeButtonActive(reportsRef);
        removeButtonActive(alertRef);
        removeButtonActive(overviewRef);
        //
        removeButtonActive(studentsRef);
        setButtonActive(studentsRef);
        break;
      case "students/feedback/reports":
        removeButtonActive(devModeRef);
        removeButtonActive(allTrackingRef);
        removeButtonActive(trackingRef);
        removeButtonActive(studentsRef);
        removeButtonActive(alertRef);
        removeButtonActive(overviewRef);
        //
        removeButtonActive(reportsRef);
        setButtonActive(reportsRef);
        break;
      case "students/tracking":
        removeButtonActive(devModeRef);
        removeButtonActive(allTrackingRef);
        removeButtonActive(reportsRef);
        removeButtonActive(studentsRef);
        removeButtonActive(alertRef);
        removeButtonActive(overviewRef);
        //
        removeButtonActive(trackingRef);
        setButtonActive(trackingRef);
        break;
      case "all/students/tracking":
        removeButtonActive(devModeRef);
        removeButtonActive(trackingRef);
        removeButtonActive(reportsRef);
        removeButtonActive(studentsRef);
        removeButtonActive(alertRef);
        removeButtonActive(overviewRef);
        //
        removeButtonActive(allTrackingRef);
        setButtonActive(allTrackingRef);
        break;
      case "developement/mode":
        removeButtonActive(allTrackingRef);
        removeButtonActive(trackingRef);
        removeButtonActive(reportsRef);
        removeButtonActive(studentsRef);
        removeButtonActive(alertRef);
        removeButtonActive(overviewRef);
        //
        removeButtonActive(devModeRef);
        setButtonActive(devModeRef);
        break;
      default:
        toOverviewPage();
        break;
    }
  }, [sections]);
  function toOverviewPage(): void {
    const page = "overview";
    setSearchParams({
      section: `${page}`,
    });
  }
  //
  function toAlertPage(): void {
    const page = "students/alerts";
    setSearchParams({
      section: `${page}`,
    });
  }
  //
  function toStudentsPage(): void {
    const page = "students/info";
    setSearchParams({
      section: `${page}`,
    });
  }
  //
  function toReportsPage(): void {
    const page = "students/feedback/reports";
    setSearchParams({
      section: `${page}`,
    });
  }
  //
  function toTrackingPage(): void {
    const page = "students/tracking";
    setSearchParams({
      section: `${page}`,
    });
  }
  //
  function toAllTrackingPage(): void {
    const page = "all/students/tracking";
    setSearchParams({
      section: `${page}`,
    });
  }
  //
  function toDevPage(): void {
    const page = "developement/mode";
    setSearchParams({
      section: `${page}`,
    });
  }
  return (
    <nav className="w-[30%] max-w-60 h-full bg-pramary-dark-blue flex flex-col component-spacing gap-7">
      <section
        className="pointer flex items-center  gap-2 text-gray-400 font-medium text-[24px] mt-10 pl-4"
        onClick={toOverviewPage}
        ref={overviewRef}
      >
        <i className="fa fa-home"></i>
        <h5 className="text-[20px] ">Overview</h5>
      </section>
      <section
        className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4"
        onClick={toAlertPage}
        ref={alertRef}
      >
        <i className="fa fa-triangle-exclamation"></i>
        <h5 className="text-[20px]">Alerts</h5>
      </section>
      <section
        className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4"
        onClick={toStudentsPage}
        ref={studentsRef}
      >
        <i className="fa fa-users"></i>
        <h5 className="text-[20px]">Students</h5>
      </section>
      <section
        className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4"
        onClick={toReportsPage}
        ref={reportsRef}
      >
        <i className="fa fa-list"></i>
        <h5 className="text-[20px]">Reports</h5>
      </section>
      <section
        className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4"
        onClick={toTrackingPage}
        ref={trackingRef}
      >
        <i className="fa fa-location"></i>
        <h5 className="text-[20px]">Tracking</h5>
      </section>
      <section
        className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4"
        onClick={toAllTrackingPage}
        ref={allTrackingRef}
      >
        <i className="fa fa-globe"></i>
        <h5 className="text-[20px]">All Tracking</h5>
      </section>
      <section
        className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4"
        onClick={toDevPage}
        ref={devModeRef}
      >
        <i className="fa fa-gears"></i>
        <h5 className="text-[20px]">Dev Mode</h5>
      </section>
      {/** */}
      <div className="w-full h-40 flex justify-center  mt-auto mb-20">
        <span className="w-30 h-30 ">
          <img className="w-full h-full rounded-2xl" src={logo}></img>
        </span>
      </div>
    </nav>
  );
}
export default LeftNavigationBar;
