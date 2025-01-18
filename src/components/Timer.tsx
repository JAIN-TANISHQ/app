import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, X } from 'lucide-react';

interface TimerProps {
  initialMinutes?: number;
  onComplete?: () => void;
  type: 'focus' | 'break' | 'coding';
  onClose?: () => void;
}

export default function Timer({ initialMinutes = 25, onComplete, type, onClose }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const playSound = useCallback(() => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    audio.play().catch(() => {
      // Handle any playback errors silently
    });
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsActive(false);
            playSound();
            setShowNotification(true);
            onComplete?.();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete, playSound]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const reset = () => {
    setIsActive(false);
    setTimeLeft(initialMinutes * 60);
    setShowNotification(false);
  };

  const toggle = () => setIsActive(!isActive);

  const getTitle = () => {
    switch (type) {
      case 'focus':
        return 'Focus Session';
      case 'break':
        return 'Break Time';
      case 'coding':
        return 'Coding Session';
      default:
        return 'Timer';
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'focus':
        return 'bg-blue-50';
      case 'break':
        return 'bg-green-50';
      case 'coding':
        return 'bg-purple-50';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`rounded-lg shadow-lg ${getBgColor()} relative`}>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded-full"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      )}
      
      <div className="p-4">
        <h3 className="text-lg font-medium mb-4">{getTitle()}</h3>
        <div className="text-center">
          <div className="text-4xl font-bold mb-4 font-mono">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggle}
              className={`p-3 rounded-full ${
                isActive 
                  ? 'bg-red-100 hover:bg-red-200 text-red-600' 
                  : 'bg-green-100 hover:bg-green-200 text-green-600'
              }`}
            >
              {isActive ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={reset}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
            >
              <RotateCcw className="w-6 h-6" />
            </button>
          </div>
        </div>

        {showNotification && (
          <div className="mt-4 p-3 bg-yellow-100 rounded-lg text-yellow-800 text-sm">
            Time's up! Take a break or start a new session.
          </div>
        )}
      </div>
    </div>
  );
}