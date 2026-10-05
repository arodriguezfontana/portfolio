'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LenguageContext';

export type ProjectData = {
  id?: string;
  image: string;
  images?: string[];
  title: string;
  category?: string;
  inProgress?: boolean;
  technologies: {
    logo: React.ReactNode;
    tecnologia: string;
  }[];
  description: string;
  longDescription?: string;
  repo: string;
};

type ProjectModalProps = {
  project: ProjectData | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Collect all photos: either images array or the main image
  const gallery = project?.images && project.images.length > 0 
    ? project.images 
    : project ? [project.image] : [];

  // Reset image index when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Handle ESC key and scroll locking
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && gallery.length > 1) {
        setActiveImageIndex((prev) => (prev + 1) % gallery.length);
      }
      if (e.key === 'ArrowLeft' && gallery.length > 1) {
        setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, gallery.length, onClose]);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Frosted Luxury Backdrop */}
      <div 
        className="fixed inset-0 bg-[#43031a]/45 dark:bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card (Optimized side-by-side on desktop so there is NO scrollbar) */}
      <div className="relative w-full max-w-4xl lg:max-w-5xl max-h-[92vh] md:max-h-[85vh] bg-white/95 dark:bg-[#230713]/95 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] border border-[#ffc3e9]/80 dark:border-[#8a1239]/60 shadow-2xl shadow-[#640527]/25 p-5 sm:p-6 lg:p-8 overflow-y-auto md:overflow-visible z-10">
        
        {/* Floating Close Button top-right */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-[#fff2fb] dark:bg-[#340c1e] border border-[#ffc3e9] dark:border-[#8a1239] text-[#640527] dark:text-[#ffc3e9] flex items-center justify-center hover:bg-[#640527] hover:text-white dark:hover:bg-[#ffc3e9] dark:hover:text-[#43031a] hover:scale-105 transition-all duration-200 cursor-pointer shadow-2xs z-20"
        >
          <X size={16} />
        </button>

        {/* Responsive Grid: Left for big gallery, Right for details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8 items-center">
          
          {/* LEFT: Image Gallery Preview (fits screen height with max-h) */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="relative rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden border border-[#ffc3e9]/50 dark:border-[#8a1239]/50 bg-[#fff2fb] dark:bg-[#1a040d] aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/11] max-h-[44vh] md:max-h-[52vh] w-full shadow-inner group">
              <Image
                src={gallery[activeImageIndex]}
                alt={`${project.title} imagen ${activeImageIndex + 1}`}
                fill
                className="object-cover object-top transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 600px"
              />

              {/* Navigation Arrows if multiple photos */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    title="Imagen anterior"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-[#230713]/90 border border-[#ffc3e9] dark:border-[#8a1239] text-[#640527] dark:text-[#ffc3e9] flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextImage}
                    title="Imagen siguiente"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-[#230713]/90 border border-[#ffc3e9] dark:border-[#8a1239] text-[#640527] dark:text-[#ffc3e9] flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>

                  <div className="absolute bottom-2.5 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-medium">
                    {activeImageIndex + 1} / {gallery.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Selector if multiple photos */}
            {gallery.length > 1 && (
              <div className="flex gap-2 mt-2.5 overflow-x-auto pb-0.5">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-11 rounded-[0.75rem] overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#640527] dark:border-[#ffc3e9] scale-105 shadow-md'
                        : 'border-[#ffc3e9]/60 dark:border-[#8a1239]/60 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Project Information (No vertical scrolling needed) */}
          <div className="md:col-span-5 flex flex-col justify-between h-full pr-0 md:pr-4">
            <div>
              {/* Title with diamond ✦ and in-progress indicator */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#640527] dark:text-[#ffc3e9] tracking-tight leading-snug mb-3 pr-8 flex items-start gap-1.5">
                <span className="text-[#8a1239] dark:text-[#ffb1e3] shrink-0 text-sm mt-0.5">✦</span>
                <span>
                  {project.title}{" "}
                  {project.inProgress && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ffc3e9]/60 dark:bg-[#43031a] text-[#640527] dark:text-[#ffc3e9] border border-[#ffc3e9] dark:border-[#8a1239] ml-1.5 align-middle animate-pulse">
                      {t('proj_in_progress')}
                    </span>
                  )}
                </span>
              </h2>

              {/* Full Description */}
              <p className="text-xs sm:text-sm text-[#8a5743] dark:text-[#dcdcdc] leading-relaxed font-normal mb-4">
                {project.longDescription || project.description}
              </p>

              {/* Technologies Applied */}
              <div className="mb-5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#8a1239] dark:text-[#ffc3e9] mb-1.5 flex items-center gap-1">
                  <span>✦</span>
                  <span>{t('proj_modal_techs')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-semibold bg-[#eeeeee] dark:bg-[#340c1e] text-[#640527] dark:text-[#ffc3e9] border border-[#dcdcdc] dark:border-[#8a1239]/50 shadow-2xs hover:bg-[#fff2fb] dark:hover:bg-[#43031a] transition-colors"
                    >
                      <span className="text-xs text-[#8a1239] dark:text-[#ffb1e3]">{tech.logo}</span>
                      <span>{tech.tecnologia}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-[#ffc3e9]/40 dark:border-[#8a1239]/40 flex flex-wrap items-center justify-between gap-2.5">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#640527] dark:bg-[#8a1239] hover:bg-[#75062e] dark:hover:bg-[#a31745] shadow-md shadow-[#640527]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <FaGithub size={14} />
                <span>{t('proj_repo_link')}</span>
                <ExternalLink size={12} />
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-semibold text-[#8a5743] dark:text-[#dcdcdc] bg-white dark:bg-[#2d0a18] border border-[#ffc3e9] dark:border-[#8a1239] hover:bg-[#fff2fb] dark:hover:bg-[#340c1e] dark:hover:text-[#ffc3e9] transition-all cursor-pointer"
              >
                {t('proj_modal_close')}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
