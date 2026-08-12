import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
    BarElement,
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
        backgroundColor: "rgba(110, 110, 248, 0.4)",
        borderColor: "rgba(110, 110, 248, 0.918)",
        borderWidth: 0.5,
      },
      {
        label: "Resumed Students",
        data: [2000, 2000, 2100, 2400, 2800, 2800, 2900],
        backgroundColor: "rgba(209, 62, 209, 0.4)",
        borderColor: "rgba(209, 62, 209, 0.795)",
        borderWidth: 0.5,
      },
      {
        label: "Active Students",
        data: [1800, 1789, 1900, 2200, 2500, 1940, 2800],
        backgroundColor: "rgb(92, 226, 92, 0.4)",
        borderColor: "rgb(92, 226, 92)",
        borderWidth: 0.5,
      },
      {
        label: "InActive Students",
        data: [200, 211, 200, 200, 300, 860, 100],
        backgroundColor: "rgb(223, 62, 62, 0.4)",
        borderColor: "rgb(223, 62, 62)",
        borderWidth: 0.5,
      },
    ],
  };
  const options = {};
  return (
    <Bar
      style={{ width: "100%", height: "100%" }}
      options={options}
      data={studentsData}
    />
  );
}
export default StudentsLineGraph;
