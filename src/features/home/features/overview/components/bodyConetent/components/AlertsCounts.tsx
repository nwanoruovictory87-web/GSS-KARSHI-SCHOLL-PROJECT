function AlertsCounts({
  panicCount,
  warningCount,
  stableCount,
}: {
  panicCount: number;
  warningCount: number;
  stableCount: number;
}): React.ReactElement {
  return (
    <section className="w-full h-[38%] flex flex-col overflow-hidden font-sans bg-pramary-dark-blue rounded-xl mb-auto ">
      <div className="w-full pl-px pr-px">
        <span className="w-full  h-7 bg-text-color  rounded-t-xl flex justify-center">
          <h5 className="min16Max18px text-black font-medium">
            Tracking States
          </h5>
        </span>
      </div>
      <div className="w-full h-full pl-2 pr-2 flex flex-col gap-3 mt-3   text-text-color font-medium">
        <span className="grid grid-cols-[70%_30%] gap-2 pr-2 items-center">
          <h5 className="min18Max22px font-medium border-r border-body-color line-clamp-1">
            Panic count
          </h5>

          <h5 className="min18Max22px font-bold text-[#ff0000d2]">
            {panicCount}
          </h5>
        </span>
        <span className="grid grid-cols-[70%_30%] gap-2 pr-2 items-center">
          <h5 className="min18Max22px font-medium border-r border-body-color line-clamp-1">
            Warning count
          </h5>

          <h5 className="min18Max22px font-bold text-[#ffa600e5]">
            {warningCount}
          </h5>
        </span>
        <span className="grid grid-cols-[70%_30%] gap-2 pr-2 items-center">
          <h5 className="min18Max22px font-medium border-r border-body-color line-clamp-1">
            Stable count
          </h5>

          <h5 className="min18Max22px font-bold text-[#0da70dd3]">
            {stableCount}
          </h5>
        </span>
      </div>
    </section>
  );
}
export default AlertsCounts;
