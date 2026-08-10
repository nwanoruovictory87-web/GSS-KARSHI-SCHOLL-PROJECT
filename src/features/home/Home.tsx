import Top from "../../shared/Top";
import LeftNavigationBar from "../../shared/LeftNavigationBar";
import StudentsRecord from "../studentsRecord/StudentsRecord";
function Home(): React.ReactElement {
  return (
    <main className="w-full h-screen max-h-full overflow-hidden">
      <Top />
      <LeftNavigationBar />
    </main>
  );
}
export default Home;
