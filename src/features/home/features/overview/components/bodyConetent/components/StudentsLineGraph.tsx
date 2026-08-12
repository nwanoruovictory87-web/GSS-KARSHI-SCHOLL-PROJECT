import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
function StudentsLineGraph(): React.ReactElement {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );
  const studentsData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thusday",
      "Friday",
      "Satuday",
    ],
    datasets: [
      {
        label: "Total Students",
        data: [3000, 3000, 3000, 3000, 3000, 3000, 3000],
        borderColor: "blue",
      },
      {
        label: "Resumed Students",
        data: [2000, 2000, 2100, 2400, 2800, 2800, 2900],
        borderColor: "purple",
      },
      {
        label: "Active Students",
        data: [1800, 1789, 1900, 2200, 2500, 1940, 2800],
        borderColor: "green",
      },
      {
        label: "InActive Students",
        data: [200, 211, 200, 200, 300, 860, 100],
        borderColor: "red",
      },
    ],
  };
  return (
    <Line
      style={{ width: "100%", height: "100%" }}
      options={{}}
      data={studentsData}
    ></Line>
  );
}
export default StudentsLineGraph;
