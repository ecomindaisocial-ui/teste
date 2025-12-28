import React, { useState } from 'react';
import { Language } from '../translations';

interface HeaderProps {
  activeSection: string;
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
  ctaText: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection, lang, setLang, t, ctaText }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const whatsappUrl = "https://wa.me/553197912550";

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'how-it-works', label: t.features },
    { id: 'use-cases', label: t.useCases },
    { id: 'history', label: t.history },
    { id: 'donation', label: t.support },
    { id: 'contact', label: t.contact },
  ];

  const languages = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="glass-effect rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm border border-eco-green/10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center group">
              <div className="absolute inset-0 bg-eco-green rounded-lg rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform">
                <i className="fas fa-brain text-eco-green text-lg"></i>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Eco<span className="text-eco-green">Mind</span></span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-sm font-semibold transition-colors hover:text-eco-green ${
                    activeSection === link.id ? 'text-eco-green' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            {/* Lang Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-100 hover:border-eco-green/30 transition-all text-sm font-bold text-slate-700 shadow-sm"
              >
                {languages.find(l => l.code === lang)?.flag} {lang.toUpperCase()}
                <i className={`fas fa-chevron-down text-[10px] transition-transform ${isLangOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-2xl p-2 shadow-2xl border border-slate-50 animate-in fade-in slide-in-from-top-2">
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as Language); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-bold rounded-xl flex items-center gap-3 transition-colors ${
                        lang === l.code ? 'bg-eco-green/10 text-eco-forest' : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <span className="text-lg">{l.flag}</span> {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href={whatsappUrl}
              className="bg-eco-green hover:bg-eco-forest text-white px-6 py-2 rounded-xl font-black text-sm uppercase tracking-tight transition-all transform hover:shadow-xl active:scale-95"
            >
              {ctaText}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden text-slate-600 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-24 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl border border-slate-50 animate-in fade-in zoom-in duration-200">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`block py-3 px-4 rounded-xl text-lg font-bold ${
                      activeSection === link.id ? 'bg-eco-green/10 text-eco-green' : 'text-slate-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                <div className="flex justify-between bg-eco-cream p-2 rounded-2xl">
                   {languages.map(l => (
                    <button 
                      key={l.code}
                      onClick={() => setLang(l.code as Language)}
                      className={`px-4 py-2 rounded-xl flex items-center gap-2 font-bold ${lang === l.code ? 'bg-eco-green text-white shadow-lg' : 'text-slate-500'}`}
                    >
                      {l.flag} <span className="text-xs uppercase">{l.code}</span>
                    </button>
                   ))}
                </div>
                <a 
                  href={whatsappUrl}
                  className="w-full bg-eco-green text-white py-4 rounded-2xl font-black text-center text-lg shadow-lg"
                >
                  {ctaText}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;