function ImportantAlertsCard(): React.ReactElement {
  return (
    <div className="w-full h-12 text-text-color border border-body-color grid grid-cols-[55%_15%_15%_15%] pl-1 pr-1">
      <span className="border-r border-body-color flex items-center">
        <h5 className="line-clamp-1">7348b7c337btv357n,8u</h5>
      </span>
      <span className="justify-center border-r border-body-color flex items-center ">
        <span className="flex items-center  text-black p-2 w-fit h-8 rounded-xl bg-[#ff0000d2]">
          <i className="fa fa-xmark"></i>
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
  );
}
export default ImportantAlertsCard;
