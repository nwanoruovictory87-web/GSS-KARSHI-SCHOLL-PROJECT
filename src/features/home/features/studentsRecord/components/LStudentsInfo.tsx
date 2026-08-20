function LStudentInfo(): React.ReactElement {
  return (
    <section className="w-full h-15  grid grid-cols-[28%_25%_12%_10%_10%_15%] border border-body-color">
      <span className="flex gap-4 pl-2 p-1 pr-2 items-center font-medium border-r border-body-color ">
        <span className="min-w-13 min-h-13 max-w-13 max-h-13 rounded-full tr-skeleton"></span>
        <h5 className="tr-skeleton w-full h-6 font-medium min16Max18px line-clamp-1"></h5>
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
      <span className="flex pl-2 p-1 pr-2  items-center font-medium border-r border-body-color">
        <h5 className="tr-skeleton w-full h-6 font-medium min16Max18px line-clamp-1"></h5>
      </span>
      <span className="grid grid-cols-3 gap-1   text-text-color p-2 pl-1.5  items-center font-medium ">
        <span className="p-2 pointer rounded-xs tr-skeleton w-full h-full text-center"></span>
        <span className="p-2 pointer rounded-xs tr-skeleton w-full h-full text-center"></span>
        <span className="p-2 pointer rounded-xs tr-skeleton w-full h-full text-center"></span>
      </span>
    </section>
  );
}
export default LStudentInfo;
