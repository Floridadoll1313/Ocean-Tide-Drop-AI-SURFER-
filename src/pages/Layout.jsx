import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Waves } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-12 py-8 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center overflow-hidden">
              <div className="w-full h-1 bg-black -rotate-45"></div>
            </div>
            <span className="font-display font-bold text-xl tracking-tighter italic uppercase">AI Surfer</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-60">
          <Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
          <Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
          <Link to="/members" className="hover:text-cyan-400 transition-colors">Members</Link>
          <Link to="/studio" className="hover:text-cyan-400 transition-colors">Studio</Link>
        </div>
        <Link to="/dashboard" className="px-6 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors inline-block">
          Dashboard
        </Link>
      </nav>

      <div className="flex-1 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center px-12 py-8 border-t border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
        <div className="mb-4 md:mb-0">Est. {new Date().getFullYear()} / Digital Sovereignty</div>
        <div className="flex gap-12 mb-4 md:mb-0">
          <span>AI</span>
          <span>Web</span>
          <span>Automation</span>
        </div>
        <div>&copy; AI Surfer Creative Agency</div>
      </footer>
    </div>
  );
}
