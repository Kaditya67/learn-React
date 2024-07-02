import React from 'react';

interface ButtonProps {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
}

const Button: React.FC<ButtonProps> = ({ setCounter, counter }) => {
  return (
    <button onClick={() => setCounter(counter + 1)}>
      Increment Counter
    </button>
  );
};

export default Button;
