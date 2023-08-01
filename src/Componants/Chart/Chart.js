import ChartBar from "./ChartBar";
import "./Chart.css";


const Chart = (props) => {

  const dataPointValues = props.datapoints.map((datapoint) => datapoint.value);
  const totalMaxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.datapoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={totalMaxValue}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
