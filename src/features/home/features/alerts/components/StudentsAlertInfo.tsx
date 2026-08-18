function StudentsAlertInfo(): React.ReactElement {
  return (
    <section className="w-full h-16  grid grid-cols-[25%_25%_12%_10%_15%_7%_6%] border border-body-color">
      <span className="flex gap-4 pl-2 p-1 items-center font-medium border-r border-body-color ">
        <span className="min-w-13 min-h-13 max-w-13 max-h-13 rounded-full bg-gray-200"></span>
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          Victory Nwanoruo
        </h5>
      </span>
      <span className="flex pl-2  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          7348b7c337btv357n,8u
        </h5>
      </span>
      <span className="flex pl-2  items-center font-medium border-r border-body-color">
        <span className="flex items-center text-black p-2 w-fit h-8 rounded-xl bg-[#0da70dd3]">
          <i className="fa fa-check"></i>
          <h5 className=" font-medium min16Max18px line-clamp-1">stable</h5>
        </span>
      </span>
      <span className="flex pl-2  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          Garki
        </h5>
      </span>
      <span className="flex pl-2  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          04/07/2024
        </h5>
      </span>
      <span className="flex pl-2  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          4PM
        </h5>
      </span>
      <span className="flex pointer pl-2  justify-center items-center font-medium ">
        <span className="flex items-center text-black p-2 w-fit h-8 rounded-xl bg-[#4b4be9]">
          <i className="fa fa-location"></i>
        </span>
      </span>
    </section>
  );
}
export default StudentsAlertInfo;
