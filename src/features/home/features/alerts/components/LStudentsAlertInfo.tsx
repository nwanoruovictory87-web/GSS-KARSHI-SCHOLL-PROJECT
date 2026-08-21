function LStudentsAlertInfo(): React.ReactElement {
  return (
    <section className="w-full h-16  grid grid-cols-[25%_25%_12%_10%_15%_7%_6%] border border-body-color">
      <span className="flex gap-4 pl-2 p-1 pr-2 items-center font-medium border-r border-body-color ">
        <span className="min-w-13 min-h-13 max-w-13 max-h-13 rounded-full tr-skeleton"></span>
        <h5 className="tr-skeleton w-full h-6 font-medium min16Max18px line-clamp-1"></h5>
      </span>
      <span className="flex pl-2 p-1 pr-2  items-center font-medium border-r border-body-color">
        <h5 className="tr-skeleton w-full h-6 font-medium min16Max18px line-clamp-1"></h5>
      </span>
      <span className="flex pl-2  items-center font-medium border-r pr-4 border-body-color">
        <span className="flex items-center text-black p-2 w-full  h-8 rounded-xl tr-skeleton"></span>
      </span>
      <span className="flex pl-2 p-1 pr-2  items-center font-medium border-r border-body-color">
        <h5 className="tr-skeleton w-full h-6 font-medium min16Max18px line-clamp-1"></h5>
      </span>
      <span className="flex pl-2 p-1 pr-2  items-center font-medium border-r border-body-color">
        <h5 className="tr-skeleton w-full h-6 font-medium min16Max18px line-clamp-1"></h5>
      </span>
      <span className="flex pl-2 p-1 pr-2  items-center font-medium border-r border-body-color">
        <h5 className="tr-skeleton w-full h-6 font-medium min16Max18px line-clamp-1"></h5>
      </span>
      <span className="flex pointer pl-2  justify-center items-center font-medium ">
        <span className="flex items-center text-black p-2 w-fit h-8 rounded-xl tr-skeleton">
          <i className="fa fa-location tr-skeleton-text"></i>
        </span>
      </span>
    </section>
  );
}
export default LStudentsAlertInfo;
