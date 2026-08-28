import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import logo from "/assets/school-logo.png";
function LeftNavigationBar(): React.ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const sections: string | null = searchParams.get("section");
  const overviewRef = useRef<HTMLDivElement | null>(null);
  const alertRef = useRef<HTMLDivElement | null>(null);
  const studentsRef = useRef<HTMLDivElement | null>(null);
  const trackingRef = useRef<HTMLDivElement | null>(null);
  const allTrackingRef = useRef<HTMLDivElement | null>(null);
  //
  function removeButtonActive(
    ref: React.RefObject<HTMLDivElement | null>,
  ): void {
    if (!ref.current) return;
    ref.current.classList.remove("text-gray-100");
    ref.current.classList.remove("bg-[#7c7cf8e5]");
    ref.current.classList.add("bg-transparent");
    ref.current.classList.add("text-gray-400");
  }
  function setButtonActive(ref: React.RefObject<HTMLDivElement | null>): void {
    if (!ref.current) return;
    ref.current.classList.remove("text-gray-400");
    ref.current.classList.remove("bg-transparent");
    ref.current.classList.add("bg-[#7c7cf8e5]");
    ref.current.classList.add("text-gray-100");
  }
  //
  useEffect(() => {
    if (
      !overviewRef.current ||
      !alertRef.current ||
      !studentsRef.current ||
      !trackingRef.current ||
      !allTrackingRef.current
    )
      return;
    switch (sections) {
      case "overview":
        removeButtonActive(allTrackingRef);
        removeButtonActive(trackingRef);
        removeButtonActive(studentsRef);
        removeButtonActive(alertRef);
        //
        removeButtonActive(overviewRef);
        setButtonActive(overviewRef);
        break;
      case "students/alerts":
        removeButtonActive(allTrackingRef);
        removeButtonActive(trackingRef);
        removeButtonActive(studentsRef);
        removeButtonActive(overviewRef);
        //
        removeButtonActive(alertRef);
        setButtonActive(alertRef);
        break;
      case "students/info":
        removeButtonActive(allTrackingRef);
        removeButtonActive(trackingRef);
        removeButtonActive(alertRef);
        removeButtonActive(overviewRef);
        //
        removeButtonActive(studentsRef);
        setButtonActive(studentsRef);
        break;
      case "students/tracking":
        removeButtonActive(allTrackingRef);
        removeButtonActive(studentsRef);
        removeButtonActive(alertRef);
        removeButtonActive(overviewRef);
        //
        removeButtonActive(trackingRef);
        setButtonActive(trackingRef);
        break;
      case "all/students/tracking":
        removeButtonActive(trackingRef);
        removeButtonActive(studentsRef);
        removeButtonActive(alertRef);
        removeButtonActive(overviewRef);
        //
        removeButtonActive(allTrackingRef);
        setButtonActive(allTrackingRef);
        break;
      /*
      case "developement/mode":
        removeButtonActive(allTrackingRef);
        removeButtonActive(trackingRef);
        removeButtonActive(studentsRef);
        removeButtonActive(alertRef);
        removeButtonActive(overviewRef);
        //
        setButtonActive(devModeRef);
        break;
     */
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
  /*
  function toDevPage(): void {
    const page = "developement/mode";
    setSearchParams({
      section: `${page}`,
    });
  }
  */
  return (
    <nav className="min-w-47.25 w-[30%] max-w-60 h-full bg-pramary-dark-blue flex flex-col component-spacing gap-5">
      <section
        className="pointer flex items-center  bg-[#7c7cf8e5] rounded-lg p-2 gap-2 transition-all  text-gray-100 font-medium text-[24px] mt-2 pl-4"
        onClick={toOverviewPage}
        ref={overviewRef}
      >
        <i className="fa fa-home"></i>
        <h5 className="text-[20px] ">Overview</h5>
      </section>
      <section
        className="pointer flex items-center  gap-2 transition-all bg-transparent rounded-lg p-2 text-gray-400 font-medium text-[24px]  pl-4"
        onClick={toAlertPage}
        ref={alertRef}
      >
        <i className="fa fa-triangle-exclamation"></i>
        <h5 className="text-[20px]">Alerts</h5>
      </section>
      <section
        className="pointer flex items-center  gap-2 transition-all bg-transparent rounded-lg p-2 text-gray-400 font-medium text-[24px]  pl-4"
        onClick={toStudentsPage}
        ref={studentsRef}
      >
        <i className="fa fa-users"></i>
        <h5 className="text-[20px]">Students</h5>
      </section>
      <section
        className="pointer flex items-center  gap-2 transition-all bg-transparent rounded-lg p-2 text-gray-400 font-medium text-[24px]  pl-4"
        onClick={toTrackingPage}
        ref={trackingRef}
      >
        <i className="fa fa-location"></i>
        <h5 className="text-[20px]">Tracking</h5>
      </section>
      <section
        className="pointer flex items-center  gap-2 transition-all bg-transparent rounded-lg p-2 text-gray-400 font-medium text-[24px]  pl-4"
        onClick={toAllTrackingPage}
        ref={allTrackingRef}
      >
        <i className="fa fa-globe"></i>
        <h5 className="text-[20px]">All Tracking</h5>
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
