function AiOverview(): React.ReactElement {
  return (
    <section className="w-[50%] border border-text-color h-full overflow-hidden bg-pramary-dark-blue rounded-xl">
      <span className="w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
        <h5 className="min16Max18px text-black font-medium">AI Overview</h5>
      </span>
      <div className="w-full h-full p-3 overflow-y-auto pb-10">
        <h5 className=" font-sans italic font-medium text-[17px] text-gray-300 ">
          Grace Okafor, a 14-year-old female, was last seen at GSS Karshi on
          August 28, 2026, at 2:10 PM. Her tracking device is currently
          transmitting, indicating a battery level of 20% with a Safe (Stable)
          tracking state
        </h5>
      </div>
    </section>
  );
}
export default AiOverview;
