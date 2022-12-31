import { useCallback, useEffect, useRef, useState } from "react";

export default function Timer() {
  const [active, setActive] = useState(false);
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const [startDate, setStartDate] = useState(new Date());
  const startDateRef = useRef(startDate);
  useEffect(() => {
    startDateRef.current = startDate;
  }, [startDate]);

  const [pauseTime, setPauseTime] = useState(0);
  const pauseTimeRef = useRef(pauseTime);
  useEffect(() => {
    pauseTimeRef.current = pauseTime;
  }, [pauseTime]);

  const [displayTime, setDisplayTime] = useState(
    new Date() - startDate + pauseTime
  );

  const tick = useRef(() => {
    if (activeRef.current) {
      setDisplayTime(new Date() - startDateRef.current + pauseTimeRef.current);
      requestAnimationFrame(tick.current);
    }
  });
  useEffect(() => {
    requestAnimationFrame(tick.current);
  }, [active]);

  const handleStartClick = useCallback(() => {
    if (!active) {
      setActive(true);
      setStartDate(new Date());
    }
  }, [active]);

  const handleStopClick = useCallback(() => {
    if (active) {
      setActive(false);
      setPauseTime(displayTime);
    }
  }, [active, displayTime]);

  const handleResetClick = useRef(() => {
    setActive(false);
    setStartDate(new Date());
    setDisplayTime(0);
    setPauseTime(0);
  });

  return (
    <div>
      <div>{displayTime}</div>
      <button onClick={handleStartClick}>start</button>
      <button onClick={handleStopClick}>stop</button>
      <button onClick={handleResetClick.current}>reset</button>
    </div>
  );
}

function getTimesFromMillis(source) {
  const timeUnits = [
    ["millis", 1000],
    ["seconds", 60],
    ["minutes", 60],
    ["hours", 24],
  ];
  return timeUnits.reduce((acc, [unitKey, unitValue]) => {
    if (unitValue) {
      const value = source % unitValue;
      source = (source - value) / unitValue;
      return object.assign({}, acc, { [unitKey]: value });
    }
    return Object.assign({}, acc, { [unitKey]: source });
  }, {});
}
