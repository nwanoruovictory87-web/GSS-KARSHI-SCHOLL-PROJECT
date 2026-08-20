function HouseMrOrMrsCard({
  isLoading,
}: {
  isLoading: boolean;
}): React.ReactElement {
  return (
    <>
      {isLoading ? (
        <>
          <div className="w-full flex  gap-3  ">
            <span className="min-w-23 max-w-23 min-h-23 max-h-23 rounded-full block tr-skeleton mr-auto"></span>
            <div className="w-full mt-2 flex flex-col gap-1 ml-auto">
              <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
              <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
              <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
              <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
              <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
              <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
            </div>
          </div>
          <span className="w-full mt-1 min16Max18px h-6 overflow-hidden  tr-skeleton"></span>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center -mt-2">
          <div className="text-center">
            <i className="fa fa-book text-[70px] text-body-color"></i>
            <h5 className="font-sans text-[20px] mt-1 font-medium text-body-color">
              No Reords Found
            </h5>
          </div>
        </div>
      )}
    </>
  );
}
export default HouseMrOrMrsCard;
