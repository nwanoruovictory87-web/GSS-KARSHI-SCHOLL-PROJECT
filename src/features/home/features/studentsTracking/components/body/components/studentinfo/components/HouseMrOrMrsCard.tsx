function HouseMrOrMrsCard(): React.ReactElement {
  return (
    <>
      <div className="w-full flex  gap-3  ">
        <span className="min-w-23 max-w-23 min-h-23 max-h-23 rounded-full block bg-gray-200 mr-auto"></span>
        <div className="w-full mt-2 flex flex-col gap-1 ml-auto">
          <span className="min16Max18px text-text-color flex gap-2">
            <h2 className="">FirstName:</h2>
            <h2 className="">Mr Victory</h2>
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
            <h2 className="">Gender:</h2>
            <h2 className="">Male</h2>
          </span>
          <span className="min16Max18px text-text-color flex gap-2">
            <h2 className="">House:</h2>
            <h2 className="">Garki</h2>
          </span>
          <span className="min16Max18px text-text-color flex gap-2">
            <h2 className="">Contact Info:</h2>
            <h2 className="">08066869429</h2>
          </span>
        </div>
      </div>
      <span className="w-full mt-1 min16Max18px text-text-color flex gap-2">
        <h2 className="">Email:</h2>
        <h2 className="w-full  line-clamp-1">nwanoruovictory87@gmail.com</h2>
      </span>
    </>
  );
}
export default HouseMrOrMrsCard;
