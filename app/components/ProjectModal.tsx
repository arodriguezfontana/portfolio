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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Frosted Luxury Backdrop */}
      <div 
        className="fixed inset-0 bg-[#43031a]/40 dark:bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white/95 dark:bg-[#230713]/95 backdrop-blur-xl rounded-[2.5rem] border border-[#ffc3e9]/80 dark:border-[#8a1239]/60 shadow-2xl shadow-[#640527]/20 p-6 sm:p-8 md:p-10 overflow-y-auto z-10">
        
        {/* Top bar: Category + Close Button */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fff2fb] dark:bg-[#340c1e] border border-[#ffc3e9] dark:border-[#8a1239] text-xs font-semibold uppercase tracking-wider text-[#8a1239] dark:text-[#ffc3e9]">
            <span>✦</span>
            <span>{project.category || 'Proyecto Editorial'}</span>
            <span>✦</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="w-9 h-9 rounded-full bg-[#fff2fb] dark:bg-[#340c1e] border border-[#ffc3e9] dark:border-[#8a1239] text-[#640527] dark:text-[#ffc3e9] flex items-center justify-center hover:bg-[#640527] hover:text-white dark:hover:bg-[#ffc3e9] dark:hover:text-[#43031a] hover:scale-105 transition-all duration-200 cursor-pointer shadow-2xs"
          >
            <X size={18} />
          </button>
        </div>

        {/* Project Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#640527] dark:text-[#ffc3e9] tracking-tight leading-snug mb-5">
          {project.title}
        </h2>

        {/* Gallery / Main Preview Frame */}
        <div className="relative rounded-[2rem] overflow-hidden border border-[#ffc3e9]/50 bg-[#fff2fb] aspect-[16/10] mb-4 shadow-inner group">
          <Image
            src={gallery[activeImageIndex]}
            alt={`${project.title} imagen ${activeImageIndex + 1}`}
            fill
            className="object-cover object-top transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 750px"
          />

          {/* Navigation Arrows if multiple photos */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                title="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-[#230713]/90 border border-[#ffc3e9] text-[#640527] dark:text-[#ffc3e9] flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextImage}
                title="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-[#230713]/90 border border-[#ffc3e9] text-[#640527] dark:text-[#ffc3e9] flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>

              <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
                {activeImageIndex + 1} / {gallery.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Selector if multiple photos */}
        {gallery.length > 1 && (
          <div className="flex gap-2.5 mb-6 overflow-x-auto pb-1">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-14 rounded-[1rem] overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-[#640527] scale-105 shadow-md'
                    : 'border-[#ffc3e9]/60 opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img} alt="thumbnail" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Detailed Information Section */}
        <div className="space-y-5 my-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8a1239] dark:text-[#ffc3e9] mb-2 flex items-center gap-1.5">
              <span>✦</span>
              <span>{t('proj_modal_details')}</span>
            </h4>
            <p className="text-sm sm:text-base text-[#8a5743] dark:text-[#dcdcdc] leading-relaxed font-normal">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Full Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8a1239] dark:text-[#ffc3e9] mb-2.5 flex items-center gap-1.5">
              <span>✦</span>
              <span>{t('proj_modal_techs')}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#eeeeee] dark:bg-[#340c1e] text-[#640527] dark:text-[#ffc3e9] border border-[#dcdcdc] dark:border-[#8a1239]/50 shadow-2xs hover:bg-[#fff2fb] transition-colors"
                >
                  <span className="text-sm text-[#8a1239] dark:text-[#ffb1e3]">{tech.logo}</span>
                  <span>{tech.tecnologia}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="pt-6 border-t border-[#ffc3e9]/40 dark:border-[#8a1239]/40 flex flex-wrap items-center justify-between gap-3">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#640527] hover:bg-[#75062e] shadow-lg shadow-[#640527]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <FaGithub size={15} />
            <span>{t('proj_repo_link')}</span>
            <ExternalLink size={14} />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#8a5743] dark:text-[#dcdcdc] bg-white dark:bg-[#2d0a18] border border-[#ffc3e9] dark:border-[#8a1239] hover:bg-[#fff2fb] transition-all cursor-pointer"
          >
            {t('proj_modal_close')}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
