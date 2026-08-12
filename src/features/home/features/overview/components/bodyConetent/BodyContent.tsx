import StudentsLineGraph from "./components/StudentsLineGraph";
import AlertsCounts from "./components/AlertsCounts";
import ImportantAlerts from "./components/ImportantAlerts";
function BodyContent() {
  return (
    <div className="w-full h-full flex mb-15 ">
      <article className="w-[60%] h-full flex flex-col bg-pramary-dark-blue rounded-xl mr-auto border border-text-color ">
        <span className="w-full h-7 bg-text-color  rounded-t-xl flex justify-center">
          <h5 className="min16Max18px text-black font-medium">
            Student Daily Graph
          </h5>
        </span>
        <section className="w-full h-full flex justify-center items-center p-2 text-text-color">
          <StudentsLineGraph />
        </section>
      </article>
      <article className="w-[38%] h-full flex flex-col  ml-auto">
        <AlertsCounts />
        <ImportantAlerts />
      </article>
    </div>
  );
}
export default BodyContent;
