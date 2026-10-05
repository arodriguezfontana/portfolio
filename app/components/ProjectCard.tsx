'use client';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import { MoveRight, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LenguageContext';

type Technology = {
  logo: ReactNode;
  tecnologia: string;
  bg?: string;
};

type ProjectCardProps = {
  image: string;
  title: string;
  technologies: Technology[];
  description: string;
  repo: string;
  category?: string;
  inProgress?: boolean;
  onOpenDetails?: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  technologies,
  description,
  repo,
  inProgress = false,
  onOpenDetails,
}) => {
  const { t } = useLanguage();

  // Max 6 most relevant technologies
  const visibleTechs = technologies.slice(0, 6);

  return (
    <article className="group relative bg-white/95 dark:bg-[#230713]/90 backdrop-blur-md rounded-[1.75rem] border border-[#ffc3e9]/60 dark:border-[#8a1239]/40 p-4 sm:p-5 shadow-md shadow-[#640527]/5 hover:-translate-y-1.5 hover:border-[#640527]/30 hover:shadow-xl hover:shadow-[#640527]/10 transition-all duration-300 flex flex-col justify-between h-full">
      
      <div>
        {/* Visual thumbnail capsule (clickable to open modal) */}
        <div 
          onClick={onOpenDetails}
          role={onOpenDetails ? "button" : undefined}
          tabIndex={onOpenDetails ? 0 : undefined}
          onKeyDown={(e) => e.key === 'Enter' && onOpenDetails && onOpenDetails()}
          className="relative rounded-[1.25rem] overflow-hidden border border-[#ffc3e9]/40 dark:border-[#8a1239]/50 bg-[#fff2fb] dark:bg-[#2d0a18] aspect-[16/10] mb-3.5 group-hover:shadow-md transition-shadow cursor-pointer"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 280px"
          />
          {/* Subtle gradient overlay with "Ver más" hint on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#640527]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-[#230713]/95 text-[10px] font-bold text-[#640527] dark:text-[#ffc3e9] shadow-sm">
              <Eye size={11} />
              <span>{t('proj_view_more')}</span>
            </span>
          </div>
        </div>

        {/* Project Title with Diamond ✦ icon and optional in-progress badge */}
        <h3 
          onClick={onOpenDetails}
          className="text-base font-bold text-[#640527] dark:text-[#ffc3e9] tracking-tight mb-2.5 leading-snug cursor-pointer hover:text-[#8a1239] dark:hover:text-white transition-colors flex items-start gap-1.5"
        >
          <span className="text-[#8a1239] dark:text-[#ffb1e3] shrink-0 text-xs mt-0.5">✦</span>
          <span className="flex-1">
            {title}{" "}
            {inProgress && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#ffc3e9]/60 dark:bg-[#43031a] text-[#640527] dark:text-[#ffc3e9] border border-[#ffc3e9] dark:border-[#8a1239] ml-1.5 align-middle">
                {t('proj_in_progress')}
              </span>
            )}
          </span>
        </h3>

        {/* Technology Badges (Max 6, smaller and clean) */}
        <div className="flex flex-wrap gap-1 mb-3.5">
          {visibleTechs.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-semibold bg-[#eeeeee] dark:bg-[#340c1e] text-[#640527] dark:text-[#ffc3e9] border border-[#dcdcdc] dark:border-[#8a1239]/50 shadow-2xs hover:bg-[#fff2fb] dark:hover:bg-[#43031a] transition-colors"
            >
              <span className="text-[10px] text-[#8a1239] dark:text-[#ffb1e3]">{tech.logo}</span>
              <span>{tech.tecnologia}</span>
            </span>
          ))}
        </div>

        {/* Description: full text without line-clamp */}
        <p className="text-xs text-[#8a5743] dark:text-[#dcdcdc] font-normal leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Action Footer: Details Button + Repository Link */}
      <div className="pt-2.5 border-t border-[#ffc3e9]/30 dark:border-[#8a1239]/30 flex flex-wrap items-center justify-between gap-1.5 mt-auto">
        <button
          type="button"
          onClick={onOpenDetails}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold text-[#640527] dark:text-[#ffc3e9] bg-white dark:bg-[#2d0a18] border border-[#ffc3e9] dark:border-[#8a1239] hover:bg-[#fff2fb] dark:hover:bg-[#43031a] hover:border-[#640527] dark:hover:border-[#ffc3e9] transition-all cursor-pointer shadow-2xs hover:scale-102"
        >
          <Eye size={12} />
          <span>{t('proj_view_more')}</span>
        </button>

        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#640527] dark:text-[#ffc3e9] bg-[#fff2fb] dark:bg-[#43031a] border border-[#ffc3e9] dark:border-[#8a1239] hover:bg-[#640527] hover:text-white dark:hover:bg-[#ffc3e9] dark:hover:text-[#43031a] shadow-2xs hover:shadow-sm transition-all duration-200 group/link"
        >
          <FaGithub size={12} />
          <span>{t('proj_repo_link')}</span>
          <MoveRight size={11} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>

    </article>
  );
};

export default ProjectCard;
