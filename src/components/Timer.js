import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [elapsed, setElapsed] = useState(0);
  const [recordTime, setRecordTime] = useState({
    username: "",
    record: "",
  });
  const record = useRef();
  record.current = elapsed;
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((elapsed) => elapsed + 10);
    }, 10);
    return () => {
      setRecordTime(recordTime + record.current / 1000);
      localStorage.setItem("record", JSON.stringify(record));
      alert("record = " + record.current / 1000);
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div>
        {Math.floor(elapsed / 1000)}:{(elapsed % 1000) / 10}
      </div>
    </div>
  );
}
