import ImportantAlertsCard from "./ImportantAlertsCard";
interface ImportantAlertsData {
  trackingID: string;
  watchTime: string;
  trackingState: number;
}
function ImportantAlerts({
  list,
}: {
  list: ImportantAlertsData[] | [];
}): React.ReactElement {
  return (
    <section className="w-full h-[58%]   flex flex-col gap-1 overflow-hidden bg-pramary-dark-blue rounded-xl mt-auto ">
      <div className="">
        <span className=" w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
          <h5 className="min16Max18px text-black font-medium">
            importents Alerts
          </h5>
        </span>
      </div>
      <div className="w-full h-full pl-2 pr-2 grid grid-rows-5 ">
        {list.length != 0 ? (
          list.map((e) => {
            return (
              <ImportantAlertsCard
                trackingID={e.trackingID}
                watchTime={e.watchTime}
                trackingState={e.trackingState}
                key={e.trackingID}
              />
            );
          })
        ) : (
          <>
            <div className="w-full h-12 text-text-color  grid grid-cols-[55%_15%_15%_15%] ">
              <span className="border-r border-body-color pl-2 pr-2 flex items-center">
                <h5 className="line-clamp-1  w-full h-4 tr-skeleton"></h5>
              </span>
              <span className="justify-center border-r border-body-color flex items-center ">
                <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl tr-skeleton">
                  <i className="fa fa-triangle-exclamation tr-skeleton-text"></i>
                </span>
              </span>
              <span className="border-r border-body-color flex items-center pl-2 pr-2">
                <h5 className=" w-full h-4 tr-skeleton"></h5>
              </span>
              <span className=" flex items-center justify-center ">
                <span className="flex items-center   text-black p-2 w-fit h-8 rounded-xl   tr-skeleton">
                  <i className="fa fa-location tr-skeleton-text"></i>
                </span>
              </span>
            </div>
            <div className="w-full h-12 text-text-color  grid grid-cols-[55%_15%_15%_15%] ">
              <span className="border-r border-body-color pl-2 pr-2 flex items-center">
                <h5 className="line-clamp-1  w-full h-4 tr-skeleton"></h5>
              </span>
              <span className="justify-center border-r border-body-color flex items-center ">
                <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl tr-skeleton">
                  <i className="fa fa-triangle-exclamation tr-skeleton-text"></i>
                </span>
              </span>
              <span className="border-r border-body-color flex items-center pl-2 pr-2">
                <h5 className=" w-full h-4 tr-skeleton"></h5>
              </span>
              <span className=" flex items-center justify-center ">
                <span className="flex items-center   text-black p-2 w-fit h-8 rounded-xl   tr-skeleton">
                  <i className="fa fa-location tr-skeleton-text"></i>
                </span>
              </span>
            </div>
            <div className="w-full h-12 text-text-color  grid grid-cols-[55%_15%_15%_15%] ">
              <span className="border-r border-body-color pl-2 pr-2 flex items-center">
                <h5 className="line-clamp-1  w-full h-4 tr-skeleton"></h5>
              </span>
              <span className="justify-center border-r border-body-color flex items-center ">
                <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl tr-skeleton">
                  <i className="fa fa-triangle-exclamation tr-skeleton-text"></i>
                </span>
              </span>
              <span className="border-r border-body-color flex items-center pl-2 pr-2">
                <h5 className=" w-full h-4 tr-skeleton"></h5>
              </span>
              <span className=" flex items-center justify-center ">
                <span className="flex items-center   text-black p-2 w-fit h-8 rounded-xl   tr-skeleton">
                  <i className="fa fa-location tr-skeleton-text"></i>
                </span>
              </span>
            </div>
            <div className="w-full h-12 text-text-color  grid grid-cols-[55%_15%_15%_15%] ">
              <span className="border-r border-body-color pl-2 pr-2 flex items-center">
                <h5 className="line-clamp-1  w-full h-4 tr-skeleton"></h5>
              </span>
              <span className="justify-center border-r border-body-color flex items-center ">
                <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl tr-skeleton">
                  <i className="fa fa-triangle-exclamation tr-skeleton-text"></i>
                </span>
              </span>
              <span className="border-r border-body-color flex items-center pl-2 pr-2">
                <h5 className=" w-full h-4 tr-skeleton"></h5>
              </span>
              <span className=" flex items-center justify-center ">
                <span className="flex items-center   text-black p-2 w-fit h-8 rounded-xl   tr-skeleton">
                  <i className="fa fa-location tr-skeleton-text"></i>
                </span>
              </span>
            </div>
            <div className="w-full h-12 text-text-color  grid grid-cols-[55%_15%_15%_15%] ">
              <span className="border-r border-body-color pl-2 pr-2 flex items-center">
                <h5 className="line-clamp-1  w-full h-4 tr-skeleton"></h5>
              </span>
              <span className="justify-center border-r border-body-color flex items-center ">
                <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl tr-skeleton">
                  <i className="fa fa-triangle-exclamation tr-skeleton-text"></i>
                </span>
              </span>
              <span className="border-r border-body-color flex items-center pl-2 pr-2">
                <h5 className=" w-full h-4 tr-skeleton"></h5>
              </span>
              <span className=" flex items-center justify-center ">
                <span className="flex items-center   text-black p-2 w-fit h-8 rounded-xl   tr-skeleton">
                  <i className="fa fa-location tr-skeleton-text"></i>
                </span>
              </span>
            </div>
          </>
        )}

        {/** */}
      </div>
    </section>
  );
}
export default ImportantAlerts;
