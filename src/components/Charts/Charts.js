import React from "react";
import ChartBars from "./ChartBars";
import "./Charts.css";
const Charts = (props) => {
    const dataPointsValue = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Charts;
