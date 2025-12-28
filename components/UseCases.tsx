
import React from 'react';

interface UseCasesProps {
  t: any;
}

const UseCases: React.FC<UseCasesProps> = ({ t }) => {
  const icons = ["fa-seedling", "fa-code-branch", "fa-shop", "fa-graduation-cap", "fa-building-wheat", "fa-truck-ramp-box"];
  const colors = ["bg-eco-green", "bg-eco-forest", "bg-lime-600", "bg-emerald-600", "bg-teal-600", "bg-green-700"];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
        <div className="max-w-2xl">
          <h2 className="text-eco-green font-black uppercase tracking-widest text-xs mb-4">{t.badge}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t.title}<span className="gradient-text">{t.titleGradient}</span></h3>
        </div>
        <p className="text-slate-500 max-w-sm font-medium">
          {t.desc}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.areas.map((area: any, index: number) => (
          <div key={index} className="group bg-white p-2 rounded-[3.5rem] hover:scale-[1.02] transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-eco-green/10 border border-slate-100">
            <div className="p-10 rounded-[3rem] h-full flex flex-col items-center text-center">
              <div className={`${colors[index]} w-20 h-20 rounded-3xl flex items-center justify-center mb-10 text-white text-3xl shadow-lg shadow-eco-green/20 group-hover:rotate-12 transition-transform`}>
                <i className={`fas ${icons[index]}`}></i>
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{area.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-10 font-medium flex-grow">
                {area.desc}
              </p>
              <button className="text-[11px] font-black uppercase tracking-widest text-eco-forest bg-eco-green/5 px-6 py-3 rounded-xl hover:bg-eco-green hover:text-white transition-all">
                {t.explore}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCases;
