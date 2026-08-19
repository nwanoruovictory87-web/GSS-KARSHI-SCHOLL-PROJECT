function StudentsInfo({
  image,
  firstName,
  middleName,
  lastName,
  trackingID,
  gender,
  house,
  year,
}: {
  image: string | null;
  firstName: string;
  middleName: string;
  lastName: string;
  trackingID: string;
  gender: string;
  house: string;
  year: string;
}): React.ReactElement {
  return (
    <section className="w-full h-15  grid grid-cols-[28%_25%_12%_10%_10%_15%] border border-body-color">
      <span className="flex gap-4 pl-2 p-1 items-center font-medium border-r border-body-color ">
        <span className="min-w-13 min-h-13 max-w-13 max-h-13 rounded-full bg-gray-200"></span>
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          {firstName} {middleName} {lastName}
        </h5>
      </span>
      <span className="flex pl-2  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          {trackingID}
        </h5>
      </span>
      <span className="flex pl-2  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          {gender}
        </h5>
      </span>
      <span className="flex pl-2  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          {house}
        </h5>
      </span>
      <span className="flex pl-2  items-center font-medium border-r border-body-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          {year}
        </h5>
      </span>
      <span className="grid grid-cols-3 gap-1 pl-2 pr-2 text-text-color  items-center font-medium ">
        <span className="p-2 pointer rounded-xs bg-blue-700 text-center">
          <i className="fa fa-pen"></i>
        </span>
        <span className="p-2 pointer rounded-xs bg-green-700 text-center">
          <i className="fa fa-eye"></i>
        </span>
        <span className="p-2 pointer rounded-xs bg-red-700 text-center">
          <i className="fa fa-trash"></i>
        </span>
      </span>
    </section>
  );
}
export default StudentsInfo;
