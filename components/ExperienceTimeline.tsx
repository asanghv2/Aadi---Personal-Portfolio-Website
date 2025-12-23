
import React from 'react';
import { Experience } from '../types';

interface ExperienceTimelineProps {
  items: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ items }) => {
  return (
    <div className="space-y-10 relative before:absolute before:left-4 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200">
      {items.map((exp, idx) => (
        <div key={idx} className="relative pl-12 group">
          {/* Timeline Dot */}
          <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <p className="text-blue-600 font-semibold">{exp.company}</p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                  {exp.duration}
                </span>
                <p className="text-slate-400 text-sm mt-1">{exp.location}</p>
              </div>
            </div>
            
            <ul className="space-y-2 mb-6">
              {exp.description.map((bullet, i) => (
                <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded uppercase tracking-tight">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
