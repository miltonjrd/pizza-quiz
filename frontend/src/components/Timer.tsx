import { useEffect, useState } from 'react';
import { NextPage } from "next";

const Timer: NextPage = () => {
  const [time, setTime] = useState<number>(0);

  const formatTime = (time: number) => {
    const m = Math.floor(time / 60);
    const s = time % 60;

    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(state => state+1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <strong>{formatTime(time)}</strong>
  );
};

export default Timer;