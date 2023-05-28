import React, { useState, useEffect } from 'react';
import classNames from 'classnames';


const TypeWriter = ({ text , className }) => {
    const [visibleChars, setVisibleChars] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setVisibleChars((prevChars) => {
          if (prevChars === text.length) {// Clear the interval when the animation reaches the end
            setTimeout(() => {
              setVisibleChars(0); // Reset to the beginning after the 2-second pause
            }, 1000);
            return prevChars; // Reset to the beginning when the animation reaches the end
          }
          return prevChars + 1;
        });
      }, 200);
  
      return () => clearInterval(interval);
    }, [text]);
  
    return (
        <div className={className}>
          {text.split('').map((char, index) => (
            <span
              key={index}
              className={classNames({
                'opacity-0': index >= visibleChars,
                'transition-opacity duration-500': index === visibleChars - 1,
                'animate-enter': index === visibleChars,
                'animate-exit': index === visibleChars - 1,
              })}
            >
              {char}
            </span>
          ))}
        </div>
      );
  };

export default TypeWriter