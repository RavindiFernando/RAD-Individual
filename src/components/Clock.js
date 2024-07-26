import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const { theme } = useTheme();

  useEffect(() => {
    console.log("Clock component mounted");
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Clock component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Clock component updated");
  });

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.7)',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px',
        borderRadius: '10px',
        zIndex: '10',
      }}
    >
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
