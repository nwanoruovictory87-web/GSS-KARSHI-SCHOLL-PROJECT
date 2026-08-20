function AiOverview({ isLoading }: { isLoading: boolean }): React.ReactElement {
  return (
    <section className="w-[50%] border border-text-color h-full overflow-hidden bg-pramary-dark-blue rounded-xl">
      <span className="w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
        <h5 className="min16Max18px text-black font-medium">Ai Overview</h5>
      </span>
      {isLoading ? (
        <div className="w-full h-full p-3 overflow-y-auto pb-10 flex flex-col gap-2">
          <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 w-full h-5 tr-skeleton"></h5>
          <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 w-[80%] h-5 tr-skeleton"></h5>
          <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 w-full h-5 tr-skeleton"></h5>
          <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 w-[80%] h-5 tr-skeleton"></h5>
          <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 w-full h-5 tr-skeleton"></h5>
          <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 w-[80%] h-5 tr-skeleton"></h5>
          <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 w-full h-5 tr-skeleton"></h5>
          <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 w-[80%] h-5 tr-skeleton"></h5>
          <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 w-full h-5 tr-skeleton"></h5>
          <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 w-[80%] h-5 tr-skeleton"></h5>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center -mt-5">
          <div className="text-center">
            <i className="fa fa-book text-[60px] text-body-color"></i>
            <h5 className="font-sans text-[20px] mt-1 font-medium text-body-color">
              No Records Found
            </h5>
          </div>
        </div>
      )}
    </section>
  );
}
export default AiOverview;
