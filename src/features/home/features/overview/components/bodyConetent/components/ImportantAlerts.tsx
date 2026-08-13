import ImportantAlertsCard from "./ImportantAlertsCard";

ImportantAlertsCard;
function ImportantAlerts(): React.ReactElement {
  return (
    <section className="w-full h-[58%]  flex flex-col gap-1 overflow-hidden bg-pramary-dark-blue rounded-xl mt-auto ">
      <div className="pl-px pr-px">
        <span className=" w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
          <h5 className="min16Max18px text-black font-medium">
            importents Alerts
          </h5>
        </span>
      </div>
      <div className="w-full h-full grid grid-rows-5 ">
        <ImportantAlertsCard />
        {/** */}
        <div className="w-full h-12 text-text-color border border-body-color grid grid-cols-[55%_15%_15%_15%] ">
          <span className="border-r border-body-color flex items-center">
            <h5 className="line-clamp-1">7348b7c337btv357n,8u</h5>
          </span>
          <span className="justify-center border-r border-body-color flex items-center ">
            <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl bg-[#ffa600e5]">
              <i className="fa fa-triangle-exclamation"></i>
            </span>
          </span>
          <span className="border-r border-body-color flex items-center pl-1">
            <h5>2PM</h5>
          </span>
          <span className=" flex items-center justify-center ">
            <span className="flex items-center   text-black p-2 w-fit h-8 rounded-xl bg-[#4b4be9]">
              <i className="fa fa-location"></i>
            </span>
          </span>
        </div>
        <ImportantAlertsCard />
        {/** */}
        <div className="w-full h-12 text-text-color border border-body-color grid grid-cols-[55%_15%_15%_15%] pl-1 pr-1">
          <span className="border-r border-body-color flex items-center">
            <h5 className="line-clamp-1">7348b7c337btv357n,8u</h5>
          </span>
          <span className="justify-center border-r border-body-color flex items-center ">
            <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl bg-[#ffa600e5]">
              <i className="fa fa-triangle-exclamation"></i>
            </span>
          </span>
          <span className="border-r border-body-color flex items-center pl-1">
            <h5>2PM</h5>
          </span>
          <span className=" flex items-center justify-center ">
            <span className="flex items-center   text-black p-2 w-fit h-8 rounded-xl bg-[#4b4be9]">
              <i className="fa fa-location"></i>
            </span>
          </span>
        </div>
        {/** */}
        <div className="w-full h-12 text-text-color border border-body-color grid grid-cols-[55%_15%_15%_15%] pl-1 pr-1">
          <span className="border-r border-body-color flex items-center">
            <h5 className="line-clamp-1">7348b7c337btv357n,8u</h5>
          </span>
          <span className="justify-center border-r border-body-color flex items-center ">
            <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl bg-[#ffa600e5]">
              <i className="fa fa-triangle-exclamation"></i>
            </span>
          </span>
          <span className="border-r border-body-color flex items-center pl-1">
            <h5>2PM</h5>
          </span>
          <span className=" flex items-center justify-center ">
            <span className="flex items-center   text-black p-2 w-fit h-8 rounded-xl bg-[#4b4be9]">
              <i className="fa fa-location"></i>
            </span>
          </span>
        </div>
        {/** */}
      </div>
    </section>
  );
}
export default ImportantAlerts;
