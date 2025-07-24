import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    const timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTime, setPrevTime] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setPrevTime(timeLeft);
      setTimeLeft(updated);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const renderUnit = (label, value, prevValue) => (
    <div className="countdown-unit">
      <div className={`flip-card ${value !== prevValue ? 'flip' : ''}`}>
        <div className="top">{value}</div>
        <div className="bottom">{value}</div>
      </div>
      <small>{label}</small>
    </div>
  );

  return (
    <div className="countdown-container">
      {renderUnit('Days', timeLeft.days, prevTime.days)}
      {renderUnit('Hours', timeLeft.hours, prevTime.hours)}
      {renderUnit('Minutes', timeLeft.minutes, prevTime.minutes)}
      {renderUnit('Seconds', timeLeft.seconds, prevTime.seconds)}
    </div>
  );
};

export default CountdownTimer;
