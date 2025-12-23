
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ExperienceTimeline from './components/ExperienceTimeline';
import AIChatAssistant from './components/AIChatAssistant';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  const [contactForm, setContactForm] = useState({ name: '', subject: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(contactForm.subject || `Message from ${contactForm.name}`);
    const body = encodeURIComponent(`Name: ${contactForm.name}\n\n${contactForm.message}`);
    window.location.href = `mailto:${RESUME_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen pb-24 selection:bg-blue-100 selection:text-blue-900">
      {/* Decorative Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Area */}
          <Sidebar data={RESUME_DATA} />

          {/* Main Content Area */}
          <main className="flex-1 space-y-16 lg:space-y-24">
            
            {/* About Section */}
            <section id="about" className="scroll-mt-24 animate-in fade-in slide-in-from-bottom-3 duration-700">
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm">
                <h2 className="text-3xl font-bold font-serif text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-blue-600">01.</span> About & Summary
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  {RESUME_DATA.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Experience</p>
                      <p className="text-sm font-bold text-slate-700">5+ Years</p>
                    </div>
                  </div>
                  <div className="px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Completed</p>
                      <p className="text-sm font-bold text-slate-700">10+ Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <h2 className="text-3xl font-bold font-serif text-slate-900 mb-10 flex items-center gap-3 px-4">
                <span className="text-blue-600">02.</span> Work History
              </h2>
              <ExperienceTimeline items={RESUME_DATA.experience} />
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-24">
              <h2 className="text-3xl font-bold font-serif text-slate-900 mb-10 flex items-center gap-3 px-4">
                <span className="text-blue-600">03.</span> Major Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RESUME_DATA.projects.map((project, idx) => (
                  <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                         <span className="px-4 py-2 bg-white text-slate-900 rounded-xl text-xs font-bold flex items-center gap-2">
                           View Details
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                         </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-blue-600 px-2 py-0.5 bg-blue-50 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-mt-24">
               <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                  
                  <h2 className="text-3xl font-bold font-serif mb-12 flex items-center gap-3 relative z-10">
                    <span className="text-blue-400">04.</span> Expertise & Skills
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {RESUME_DATA.skills.map((group, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest">{group.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item, i) => (
                            <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </section>

            {/* Education Section */}
            <section id="education" className="scroll-mt-24">
               <h2 className="text-3xl font-bold font-serif text-slate-900 mb-10 flex items-center gap-3 px-4">
                <span className="text-blue-600">05.</span> Education
              </h2>
              <div className="space-y-6">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                      {edu.details && <p className="text-slate-500 text-sm mt-2">{edu.details}</p>}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">{edu.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="scroll-mt-24 pt-12">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-8 lg:p-16 text-white shadow-xl">
                 <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6 text-center">Let's work together!</h2>
                    <p className="text-blue-100 mb-12 text-center text-lg">
                      Have a specific inquiry or just want to say hi? Fill out the form below and it'll send an email directly to <strong>{RESUME_DATA.email}</strong>.
                    </p>
                    
                    <form onSubmit={handleContactSubmit} className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl text-slate-900 space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                             <input 
                                required
                                type="text" 
                                placeholder="John Doe"
                                value={contactForm.name}
                                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                             />
                          </div>
                          <div className="space-y-2">
                             <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                             <input 
                                required
                                type="text" 
                                placeholder="Project Proposal"
                                value={contactForm.subject}
                                onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                             />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                          <textarea 
                             required
                             rows={4}
                             placeholder="I'd love to discuss a potential project..."
                             value={contactForm.message}
                             onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                             className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                          ></textarea>
                       </div>
                       <button 
                          type="submit"
                          className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3"
                       >
                          Send Message
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                       </button>
                    </form>

                    <div className="mt-12 flex flex-wrap justify-center gap-8">
                       <a href={RESUME_DATA.linkedin} target="_blank" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                          <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                          </span>
                          LinkedIn Profile
                       </a>
                       <a href={RESUME_DATA.github} target="_blank" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                          <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          </span>
                          GitHub
                       </a>
                    </div>
                 </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Floating AI Assistant */}
      <AIChatAssistant data={RESUME_DATA} />

      {/* Footer Meta */}
      <footer className="mt-24 border-t border-slate-100 py-12 text-center">
        <p className="text-slate-400 text-sm font-medium">
          &copy; 2026 Built by {RESUME_DATA.name}.
        </p>
      </footer>
    </div>
  );
};

export default App;
