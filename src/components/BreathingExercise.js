import React, { useState, useEffect, useRef } from 'react';
import './BreathingExercise.css';

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('inhale'); // inhale, hold, exhale
  const [count, setCount] = useState(4);
  const [cycle, setCycle] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount > 1) {
            return prevCount - 1;
          } else {
            // Move to next phase
            setPhase((prevPhase) => {
              if (prevPhase === 'inhale') {
                return 'hold';
              } else if (prevPhase === 'hold') {
                return 'exhale';
              } else {
                setCycle((prevCycle) => prevCycle + 1);
                return 'inhale';
              }
            });
            return 4;
          }
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  const startExercise = () => {
    setIsActive(true);
    setPhase('inhale');
    setCount(4);
    setCycle(0);
  };

  const stopExercise = () => {
    setIsActive(false);
    setPhase('inhale');
    setCount(4);
  };

  const getPhaseInstruction = () => {
    switch(phase) {
      case 'inhale':
        return 'Breathe In';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return 'Breathe Out';
      default:
        return 'Breathe In';
    }
  };

  const getCircleClass = () => {
    return `breathing-circle ${isActive ? phase : ''}`;
  };

  return (
    <div className="breathing-exercise">
      <h2>Breathing Exercise</h2>
      <p className="subtitle">Take a moment to calm your mind</p>
      
      <div className="breathing-info">
        <p>This 4-4-4 breathing technique can help reduce anxiety and stress.</p>
        <ul>
          <li>Breathe in for 4 seconds</li>
          <li>Hold for 4 seconds</li>
          <li>Breathe out for 4 seconds</li>
        </ul>
      </div>

      <div className="breathing-container">
        <div className={getCircleClass()}>
          <div className="breathing-text">
            <div className="phase-instruction">{getPhaseInstruction()}</div>
            <div className="count-number">{count}</div>
          </div>
        </div>
      </div>

      {isActive && (
        <div className="cycle-count">
          Cycle: {cycle + 1}
        </div>
      )}

      <div className="breathing-controls">
        {!isActive ? (
          <button onClick={startExercise} className="start-btn">
            Start Breathing Exercise
          </button>
        ) : (
          <button onClick={stopExercise} className="stop-btn">
            Stop
          </button>
        )}
      </div>

      <div className="breathing-tips">
        <h3>Tips for Better Results:</h3>
        <ul>
          <li>Find a quiet, comfortable place</li>
          <li>Close your eyes if it helps you focus</li>
          <li>Breathe through your nose</li>
          <li>Let your belly expand as you breathe in</li>
          <li>Practice for at least 3-5 cycles</li>
        </ul>
      </div>
    </div>
  );
};

export default BreathingExercise;
