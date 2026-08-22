import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
function StudentsLineGraph({
  total,
  resumed,
  active,
  inActive,
}: {
  total: number;
  resumed: number;
  active: number;
  inActive: number;
}): React.ReactElement {
  ChartJS.register(Title, Tooltip, Legend, ArcElement);
  const studentsData = {
    labels: ["Total", "Resumed", "Active", "Not Active"],
    datasets: [
      {
        label: "Score",
        data: [total, resumed, active, inActive],
        backgroundColor: ["#d843d68c", "#4363d88c", "#43d8438c", "#d843438c"],
        borderWidth: 0.5,
      },
    ],
  };
  const options = {};
  return (
    <Pie
      style={{ width: "100%", height: "100%", maxHeight: "400px" }}
      options={options}
      data={studentsData}
    />
  );
}
export default StudentsLineGraph;
