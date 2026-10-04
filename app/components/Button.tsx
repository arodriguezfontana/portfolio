import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'wine-outline';
  type?: "button" | "submit" | "reset";
}

const Button = ({
  onClick,
  className = "",
  children,
  icon,
  variant = 'primary',
  type = "button"
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none";

  const variantStyles = {
    primary: "bg-[#640527] text-white shadow-xl shadow-[#640527]/20 hover:bg-[#75062e] hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-white text-[#43031a] border border-[#ffc3e9] shadow-sm hover:bg-[#ffc3e9]/20 hover:border-[#e898cb] hover:scale-[1.02] active:scale-[0.98]",
    ghost: "bg-white/80 backdrop-blur-md text-[#640527] hover:bg-[#fff2fb] hover:text-[#75062e]",
    'wine-outline': "border border-[#640527]/40 text-[#640527] hover:bg-[#640527] hover:text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="transition-transform duration-200">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
