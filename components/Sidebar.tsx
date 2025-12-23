
import React from 'react';
import { PortfolioData } from '../types';

interface SidebarProps {
  data: PortfolioData;
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 20; // Extra padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-8 h-fit z-40">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-8">
        {/* Profile Header */}
        <div className="text-center lg:text-left">
          <div className="w-24 h-24 bg-slate-100 rounded-2xl mx-auto lg:mx-0 mb-4 flex items-center justify-center overflow-hidden border-2 border-slate-50">
             <img src={`https://picsum.photos/seed/${data.name}/200`} alt={data.name} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 font-serif leading-tight">{data.name}</h1>
          <p className="text-blue-600 font-medium text-sm mt-1">{data.title}</p>
        </div>

        {/* Navigation - Now visible on all screens with horizontal scroll on mobile */}
        <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 gap-1 lg:space-y-1 no-scrollbar border-y lg:border-none border-slate-50 py-4 lg:py-0">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className="whitespace-nowrap flex-shrink-0 block px-4 lg:px-3 py-2 text-sm font-semibold text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Quick Links */}
        <div className="space-y-3 pt-4 lg:pt-0">
          <a href={`mailto:${data.email}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors text-sm group">
            <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </span>
            Email
          </a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors text-sm group">
            <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </span>
            LinkedIn
          </a>
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors text-sm group">
            <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </span>
            GitHub
          </a>
        </div>

        {/* Status indicator */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-emerald-600">
           <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
           AVAILABLE FOR HIRE
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
