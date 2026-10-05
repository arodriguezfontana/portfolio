import React from 'react';

type CardProps = {
  icon?: React.ReactNode;
  subtitle?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const Card = ({ icon, subtitle, title, children, className = "" }: CardProps) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Editorial Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        {subtitle && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff2fb] dark:bg-[#340c1e] border border-[#ffc3e9]/60 dark:border-[#8a1239]/60 text-xs font-semibold uppercase tracking-widest text-[#8a1239] dark:text-[#ffc3e9] mb-3 shadow-xs">
            <span className="text-[#8a1239] dark:text-[#ffb1e3] text-xs">✦</span>
            <span>{subtitle}</span>
            <span className="text-[#8a1239] dark:text-[#ffb1e3] text-xs">✦</span>
          </div>
        )}
        <div className="flex items-center justify-center gap-3">
          {icon && (
            <div className="w-10 h-10 rounded-full bg-[#fff2fb] dark:bg-[#340c1e] border border-[#ffc3e9]/70 dark:border-[#8a1239]/60 flex items-center justify-center text-[#640527] dark:text-[#ffc3e9] shadow-sm">
              {icon}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#640527] dark:text-[#ffc3e9] tracking-tight">
            {title}
          </h2>
        </div>
        {/* Subtle decorative divider line */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#ffc3e9] dark:via-[#8a1239] to-transparent mt-4 rounded-full" />
      </div>

      {/* Content wrapper */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default Card;
