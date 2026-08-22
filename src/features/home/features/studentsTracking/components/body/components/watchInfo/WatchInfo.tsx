function WatchInfo({
  batteryPercent,
  watchTime,
  watchDate,
}: {
  batteryPercent: string;
  watchTime: string;
  watchDate: string;
}): React.ReactElement {
  return (
    <section className="w-[50%] flex flex-col border border-text-color h-full bg-pramary-dark-blue rounded-xl">
      <span className="w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
        <h5 className="min16Max18px text-black font-medium">
          Student Watch info
        </h5>
      </span>
      <div className="w-full h-full  flex justify-center items-center">
        <div className="relative p-10   -mt-5">
          <i className="fa fa-stopwatch text-[60px] text-text-color"></i>
          {/**top */}
          <div className="absolute top-0 ml-2">
            <span className="flex  text-text-color">
              <i className="fa fa-battery-three-quarters text-[20px] rotate-270"></i>
              <h5 className="-ml-1 font-sans text-text-color font-semibold text-[16px]">
                {batteryPercent}%
              </h5>
            </span>
          </div>
          {/**bottom */}
          <div className="absolute bottom-0 -ml-2">
            <span className="flex items-center  text-text-color">
              <i className="fa fa-stopwatch text-[20px] "></i>
              <h5 className=" font-sans text-text-color font-semibold text-[16px]">
                {watchTime}
              </h5>
            </span>
          </div>
          {/**left */}
          <div className="absolute left-0 top-0 mt-[30%] -ml-13">
            <span className="flex flex-col items-center  text-text-color">
              <i className="fa fa-calendar-check text-[20px] "></i>
              <h5 className=" font-sans text-text-color font-semibold text-[16px]">
                {watchDate}
              </h5>
            </span>
          </div>
          {/**right */}
          <div className="absolute right-0 top-0 mt-[30%] -mr-13">
            <span className="flex flex-col items-center  text-text-color">
              <i className="fa fa-calendar-check text-[20px] "></i>
              <h5 className=" font-sans text-text-color font-semibold text-[16px]">
                {new Date().getDay() >= 10
                  ? new Date().getDay()
                  : `0${new Date().getDay()}`}
                /
                {new Date().getMonth() + 1 >= 10
                  ? new Date().getMonth() + 1
                  : `0${new Date().getMonth() + 1}`}
                /{new Date().getFullYear()}
              </h5>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WatchInfo;
