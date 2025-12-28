
import React from 'react';

interface HowItWorksProps {
  t: any;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ t }) => {
  const icons = ['fa-link', 'fa-microchip', 'fa-chart-pie'];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-eco-forest font-black uppercase tracking-widest text-xs mb-4">{t.badge}</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">{t.title}</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
          {t.desc}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {t.steps.map((step: any, index: number) => (
          <div key={index} className="group p-10 bg-white rounded-[3rem] hover:shadow-2xl hover:shadow-eco-green/10 transition-all duration-500 relative overflow-hidden border border-slate-50">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-eco-green/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="w-20 h-20 bg-eco-green rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-eco-green/20 group-hover:rotate-6 transition-transform">
              <i className={`fas ${icons[index]} text-3xl text-white`}></i>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-slate-100 font-black text-5xl transition-colors group-hover:text-eco-green/10">0{index + 1}</span>
              <h4 className="text-2xl font-bold text-slate-900 tracking-tight">{step.title}</h4>
            </div>
            
            <p className="text-slate-600 leading-relaxed font-medium">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 glass-effect rounded-[4rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 border border-eco-green/10">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-eco-green/20 blur-[80px] rounded-full"></div>
          <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" alt="Workflow Interface" className="rounded-[3rem] shadow-2xl relative z-10 aspect-square object-cover" />
        </div>
        <div className="lg:w-1/2">
          <h4 className="text-4xl font-black mb-8 text-slate-900 tracking-tight leading-tight">{t.hubTitle}</h4>
          <ul className="space-y-5">
            {t.hubItems.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1.5 w-6 h-6 rounded-full bg-eco-green flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="fas fa-check text-[10px] text-white"></i>
                </div>
                <span className="text-slate-700 font-bold">{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-12 text-eco-forest font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:gap-6 transition-all">
            {t.hubLink} <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
