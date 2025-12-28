import React from 'react';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const whatsappUrl = "https://wa.me/553197912550";

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-eco-green/10 border border-eco-green/20 rounded-full px-5 py-2 mb-10">
              <span className="flex h-2 w-2 rounded-full bg-eco-green animate-pulse"></span>
              <span className="text-eco-forest text-[11px] font-extrabold uppercase tracking-widest">{t.badge}</span>
            </div>
            
            <h1 className="text-5xl md:text-[4.5rem] font-extrabold leading-[1.1] mb-6 text-[#0f172a] tracking-tight">
              {t.title}<br />
              <span className="gradient-text">{t.titleHighlight1}</span>
              {t.titleMid}
              <span className="gradient-text">{t.titleHighlight2}</span>
            </h1>
            
            <p className="text-3xl font-black text-eco-green mb-10 tracking-tight flex items-center justify-center lg:justify-start gap-3">
              <i className="fab fa-whatsapp text-4xl"></i>
              {t.phone}
            </p>
            
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {t.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
              <a href={whatsappUrl} className="w-full sm:w-auto block">
                <button className="w-full px-16 py-6 bg-[#76c043] hover:bg-eco-forest text-white rounded-[1.3rem] font-black text-2xl transition-all transform hover:shadow-xl active:scale-95 shadow-lg">
                  {t.ctaPrimary}
                </button>
              </a>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="flex flex-col items-center lg:items-start bg-white/50 backdrop-blur-sm border border-slate-200 p-8 rounded-[2.5rem] min-w-[200px] shadow-sm hover:shadow-xl transition-all group">
                <span className="text-5xl font-black text-slate-900 group-hover:text-eco-green transition-colors">60+</span>
                <span className="text-[12px] font-black uppercase tracking-widest text-slate-500 mt-2">{t.statsUsers}</span>
              </div>
              <div className="flex flex-col items-center lg:items-start bg-white/50 backdrop-blur-sm border border-slate-200 p-8 rounded-[2.5rem] min-w-[200px] shadow-sm hover:shadow-xl transition-all group">
                <span className="text-5xl font-black text-slate-900 group-hover:text-eco-green transition-colors">4.5/5</span>
                <span className="text-[12px] font-black uppercase tracking-widest text-slate-500 mt-2">{t.statsRating}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative group">
              <div className="p-3 bg-white rounded-[4.5rem] shadow-[0_40px_100px_-20px_rgba(118,192,67,0.15)] relative overflow-hidden ring-1 ring-eco-green/10">
                 <img 
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200" 
                  alt="EcoMind Environment" 
                  className="rounded-[4rem] w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;