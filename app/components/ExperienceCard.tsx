import React from 'react';

type ExperienceCardProps = {
  role: string;
  company: string;
  badge?: string;
  date: string;
  description?: string;
  children?: React.ReactNode;
  isLast?: boolean;
};

const ExperienceCard = ({ 
  role, 
  company, 
  badge, 
  date, 
  description, 
  children, 
  isLast = false 
}: ExperienceCardProps) => {
  return (
    <div className="relative pl-7 sm:pl-9 pb-5 sm:pb-6 group last:pb-0">
      {/* Delicate vertical timeline line */}
      {!isLast && (
        <div 
          aria-hidden="true" 
          className="absolute left-[13px] top-5 bottom-0 w-0.5 bg-gradient-to-b from-[#8a1239]/30 via-[#ffc3e9] to-[#ffc3e9]/20" 
        />
      )}

      {/* Delicate sparkle marker */}
      <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full bg-[#fff2fb] dark:bg-[#340c1e] border-2 border-[#ffc3e9] dark:border-[#8a1239] text-[#640527] dark:text-[#ffc3e9] flex items-center justify-center text-[11px] font-bold shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:border-[#640527]">
        ✦
      </div>

      {/* Content Box */}
      <div className="bg-[#fff2fb]/40 dark:bg-[#2d0a18]/40 border border-[#ffc3e9]/50 dark:border-[#8a1239]/30 rounded-[1.35rem] p-4 sm:p-5 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <h4 className="text-base sm:text-lg font-extrabold text-[#640527] dark:text-[#ffc3e9] tracking-tight">
              {role}
            </h4>
            <span className="text-xs sm:text-sm font-semibold text-[#8a1239] dark:text-[#ffb1e3]">
              {company}
            </span>
            {badge && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#ffc3e9]/40 dark:bg-[#8a1239]/30 text-[#8a1239] dark:text-[#ffc3e9] border border-[#ffc3e9]/70 dark:border-[#8a1239]/50">
                {badge}
              </span>
            )}
          </div>
          
          <div className="self-start sm:self-center shrink-0">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white dark:bg-[#43031a] text-[#640527] dark:text-[#ffc3e9] border border-[#ffc3e9] dark:border-[#8a1239]/60 shadow-2xs">
              {date}
            </span>
          </div>
        </div>

        {description && (
          <p className="text-[#8a5743] dark:text-[#dcdcdc] text-xs sm:text-sm leading-relaxed font-normal mt-1.5">
            {description}
          </p>
        )}

        {children}
      </div>
    </div>
  );
};

export default ExperienceCard;
