import Filter from "./components/Filter";
import List from "./components/List";
function StudentsRecord(): React.ReactElement {
  return (
    <div className="component-spacing h-full relative">
      <Filter />
      <article className="mt-7 rounded-xl w-full h-[80%]  overflow-hidden bg-pramary-dark-blue border border-text-color ">
        <section className="w-full h-10 bg-gray-200 grid grid-cols-[30%_30%_15%_15%_10%] pr-4">
          <span className="flex justify-center items-center font-medium border-r border-r-pramary-dark-blue">
            <h5>Full Name</h5>
          </span>
          <span className="flex justify-center items-center font-medium border-r border-r-pramary-dark-blue">
            <h5>Tracking ID</h5>
          </span>
          <span className="flex justify-center items-center font-medium border-r border-r-pramary-dark-blue">
            <h5>Gender</h5>
          </span>
          <span className="flex justify-center items-center font-medium border-r border-r-pramary-dark-blue">
            <h5>House</h5>
          </span>
          <span className="flex justify-center items-center font-medium">
            <h5>Year</h5>
          </span>
        </section>
        <List />
      </article>
    </div>
  );
}
export default StudentsRecord;
