function StudentsInfo(): React.ReactElement {
  return (
    <section className="w-full h-15  grid grid-cols-[30%_30%_15%_15%_10%] border border-body-color">
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
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          Male
        </h5>
      </span>
      <span className="flex pl-2  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          Garki
        </h5>
      </span>
      <span className="flex pl-2  items-center font-medium ">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          2022
        </h5>
      </span>
    </section>
  );
}
export default StudentsInfo;
