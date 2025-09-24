import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string; 
  children: ReactNode;
}

const Button = ({ onClick, className = "", children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm transition-colors duration-200 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
