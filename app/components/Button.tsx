import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string; 
  children: ReactNode;
  icon?: ReactNode;
}

const Button = ({ onClick, className = "", children, icon }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm transition-colors duration-150 cursor-pointer ${className}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
