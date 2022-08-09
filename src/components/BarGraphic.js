import React from 'react';
import '../Style/BarGraphic.css';

const BarGraphic = (props) => {
  
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  
  return (
    <div className='bar-graphic__container'>
      <div className='bar-graphic__inner'>
        <div className='bar-graphic__fill' style={{height: barFillHeight}}></div>
      </div>
      <div className='bar-graphic__label'>{props.label}</div>
    </div>
  )
}

export default BarGraphic;