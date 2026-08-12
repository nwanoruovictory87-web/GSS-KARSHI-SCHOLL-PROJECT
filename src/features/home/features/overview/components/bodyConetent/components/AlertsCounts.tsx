function AlertsCounts(): React.ReactElement {
  return (
    <section className="w-full h-[38%] flex flex-col overflow-hidden font-sans bg-pramary-dark-blue rounded-xl mb-auto border border-text-color">
      <span className="w-full  h-7 bg-text-color  rounded-t-xl flex justify-center">
        <h5 className="min16Max18px text-black font-medium">Alerts Counts</h5>
      </span>
      <div className="w-full h-full flex flex-col gap-3 mt-3  pl-2 text-text-color font-medium">
        <span className="flex gap-2 ">
          <h5 className="min18Max22px font-medium text-[#ff0000d2]">
            Today's panic count:
          </h5>
          <h5 className="min18Max22px font-bold">23</h5>
        </span>
        <span className="flex gap-2 ">
          <h5 className="min18Max22px font-medium text-[#ffa600e5]">
            Today's warning count:
          </h5>
          <h5 className="min18Max22px font-bold">242</h5>
        </span>
        <span className="flex gap-2 ">
          <h5 className="min18Max22px font-medium text-[#0da70dd3]">
            Total stable count:
          </h5>
          <h5 className="min18Max22px font-bold">2432</h5>
        </span>
      </div>
    </section>
  );
}
export default AlertsCounts;
