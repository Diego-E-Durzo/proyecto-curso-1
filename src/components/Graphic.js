import React from "react";
import BarGraphic from "./BarGraphic";
import '../Style/Graphic.css';

const Graphic = (props) => {
  
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

  const maximumValue = Math.max(...dataPointValues);
  
  return (
    <div className="graphic-container">
      {props.dataPoints.map((dataPoint) => (
        <BarGraphic
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Graphic;
