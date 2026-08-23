function ImportantAlertsCard({
  trackingID,
  trackingState,
  watchTime,
}: {
  trackingID: string;
  watchTime: string;
  trackingState: number;
}): React.ReactElement {
  return (
    <div className="w-full h-12 text-text-color  grid grid-cols-[55%_15%_15%_15%] ">
      <span className="border-r border-body-color flex items-center">
        <h5 className="line-clamp-1">{trackingID}</h5>
      </span>
      <span className="justify-center border-r border-body-color flex items-center ">
        {trackingState === 3 ? (
          <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl bg-[#ff0000d2]">
            <i className="fa fa-xmark"></i>
          </span>
        ) : (
          <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl bg-[#ffa600e5]">
            <i className="fa fa-triangle-exclamation"></i>
          </span>
        )}
      </span>
      <span className="border-r border-body-color flex items-center pl-1">
        <h5>{watchTime}</h5>
      </span>
      <span className=" flex items-center justify-center ">
        <span className="flex items-center   text-black p-2 w-fit h-8 rounded-xl bg-[#4b4be9]">
          <i className="fa fa-location"></i>
        </span>
      </span>
    </div>
  );
}
export default ImportantAlertsCard;
