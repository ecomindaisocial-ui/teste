import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import History from './components/History';
import Donation from './components/Donation';
import Contact from './components/Contact';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Language>('pt');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'how-it-works', 'use-cases', 'history', 'donation', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-eco-cream text-slate-800 flex flex-col selection:bg-eco-green/30 selection:text-eco-forest">
      <Header 
        activeSection={activeSection} 
        lang={lang} 
        setLang={setLang} 
        t={t.nav} 
        ctaText={t.hero.ctaPrimary}
      />
      
      <main className="flex-grow">
        <section id="home">
          <Hero t={t.hero} />
        </section>

        <section id="how-it-works" className="py-24 bg-white/40">
          <HowItWorks t={t.features} />
        </section>

        <section id="use-cases" className="py-24">
          <UseCases t={t.useCases} />
        </section>

        <section id="history" className="py-32 bg-eco-green/5">
          <History t={t.history} />
        </section>

        <section id="donation" className="py-24">
          <Donation t={t.donation} />
        </section>

        <section id="contact" className="py-32 bg-[#0f172a] text-white">
          <Contact t={t.contact} />
        </section>
      </main>

      <footer className="py-12 text-center text-slate-500 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-eco-green rounded-lg flex items-center justify-center text-white">
               <i className="fas fa-brain text-xs"></i>
            </div>
            <span className="font-bold text-slate-900">EcoMind</span>
          </div>
          <p className="text-sm">© 2024 EcoMind. Powered by Nature & Intelligence.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;