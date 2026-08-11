import Filter from "./components/Filter";
import List from "./components/List";
function Alerts(): React.ReactElement {
  return (
    <div className="component-spacing h-full relative">
      <Filter />
      <article className="mt-7 rounded-xl w-full h-[83%]  overflow-hidden bg-pramary-dark-blue border border-text-color ">
        <section className="w-full h-10 bg-gray-200 grid grid-cols-[25%_25%_12%_10%_15%_5%_8%] pr-4">
          <span className="flex justify-center items-center font-medium border-r border-r-pramary-dark-blue">
            <h5>Full Name</h5>
          </span>
          <span className="flex justify-center items-center font-medium border-r border-r-pramary-dark-blue">
            <h5>Tracking ID</h5>
          </span>
          <span className="flex justify-center items-center font-medium border-r border-r-pramary-dark-blue">
            <h5>State</h5>
          </span>
          <span className="flex justify-center items-center font-medium border-r border-r-pramary-dark-blue">
            <h5>House</h5>
          </span>
          <span className="flex justify-center items-center font-medium border-r border-r-pramary-dark-blue">
            <h5>Date</h5>
          </span>
          <span className="flex justify-center items-center font-medium border-r border-r-pramary-dark-blue">
            <h5>Time</h5>
          </span>
          <span className="flex justify-center items-center font-medium">
            <h5>Action</h5>
          </span>
        </section>
        {/** */}
        <List />
      </article>
    </div>
  );
}
export default Alerts;
