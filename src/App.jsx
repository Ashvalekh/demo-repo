import React, { useState, useEffect } from 'react';
import './App.css';

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('green');

  useEffect(() => {
    const interval = setInterval(() => {
      switch (currentLight) {
        case 'green':
          setCurrentLight('yellow');
          break;
        case 'yellow':
          setCurrentLight('red');
          break;
        case 'red':
          setCurrentLight('green');
          break;
        default:
          break;
      }
    }, [15000, 1500, 30000][['red', 'yellow', 'green'].indexOf(currentLight)]);

    return () => clearInterval(interval);
  }, [currentLight]);

  return (
    <div className="traffic-light">
      <div className={`light ${currentLight === 'red' ? 'red' : ''}`} />
      <div className={`light ${currentLight === 'yellow' ? 'yellow' : ''}`} />
      <div className={`light ${currentLight === 'green' ? 'green' : ''}`} />
    </div>
  );
};

export default TrafficLight;