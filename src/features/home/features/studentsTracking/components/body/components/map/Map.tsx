import MapContent from "./components/MapContent";
function Map(): React.ReactElement {
  return (
    <section className="rounded-xl border border-text-color bg-pramary-dark-blue w-full h-[60%]   relative">
      <div className="w-full h-full  flex flex-col max-h-full  rounded-xl">
        <span className="w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
          <h5 className="min16Max18px text-black font-medium">
            Student Location (Map)
          </h5>
        </span>
        <div className="w-full h-full  rounded-xl relative">
          <MapContent />
        </div>
      </div>
    </section>
  );
}
export default Map;
