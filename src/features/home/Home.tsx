import Top from "./shared/Top";
import LeftNavigationBar from "./shared/LeftNavigationBar";
import StudentsHiglights from "./components/StudentsHiglights";
//import StudentsRecord from "./features/studentsRecord/StudentsRecord";
function Home(): React.ReactElement {
  return (
    <div className="w-full h-screen max-h-full overflow-hidden">
      <Top />
      <main className="w-full h-full flex">
        <LeftNavigationBar />
        <article className="w-full h-full component-spacing">
          <StudentsHiglights />
        </article>
      </main>
    </div>
  );
}
export default Home;
