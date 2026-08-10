import Top from "./shared/Top";
import LeftNavigationBar from "./shared/LeftNavigationBar";
import Overview from "./features/overview/Overview";
//import StudentsRecord from "./features/studentsRecord/StudentsRecord";
function Home(): React.ReactElement {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden">
      <Top />
      <main className="w-full h-full flex">
        <LeftNavigationBar />
        <article className="w-full h-full component-spacing">
          <Overview />
        </article>
      </main>
    </div>
  );
}
export default Home;
