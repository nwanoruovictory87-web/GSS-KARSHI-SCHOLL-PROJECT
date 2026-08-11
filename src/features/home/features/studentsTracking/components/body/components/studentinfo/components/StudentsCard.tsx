function StudentsCard(): React.ReactElement {
  return (
    <div className="w-full flex  gap-3  ">
      <span className="min-w-23 max-w-23 min-h-23 max-h-23 rounded-full block bg-gray-200 mr-auto"></span>
      <div className="w-full mt-2 flex flex-col gap-1 ml-auto">
        <span className="min16Max18px text-text-color flex gap-2">
          <h2 className="">FirstName:</h2>
          <h2 className="">Victory</h2>
        </span>
        <span className="min16Max18px text-text-color flex gap-2">
          <h2 className="">LastName:</h2>
          <h2 className="">Nwanoruo</h2>
        </span>
        <span className="min16Max18px text-text-color flex gap-2">
          <h2 className="">MiddleName:</h2>
          <h2 className="">---</h2>
        </span>
        <span className="min16Max18px text-text-color flex gap-2">
          <h2 className="">Age:</h2>
          <h2 className="">22</h2>
        </span>
        <span className="min16Max18px text-text-color flex gap-2">
          <h2 className="">Date Of Birth:</h2>
          <h2 className="">14-07-2004</h2>
        </span>
        <span className="min16Max18px text-text-color flex gap-2">
          <h2 className="">Gender:</h2>
          <h2 className="">Male</h2>
        </span>
        <span className="min16Max18px text-text-color flex gap-2">
          <h2 className="">House:</h2>
          <h2 className="">Garki</h2>
        </span>
      </div>
    </div>
  );
}
export default StudentsCard;
