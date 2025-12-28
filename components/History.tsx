
import React from 'react';

interface HistoryProps {
  t: any;
}

const History: React.FC<HistoryProps> = ({ t }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-24">
        <h2 className="text-eco-forest font-black uppercase tracking-widest text-xs mb-4">{t.badge}</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900">{t.title}</h3>
      </div>

      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-eco-green/10 hidden md:block"></div>

        <div className="space-y-32">
          {t.events.map((event: any, index: number) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className={`p-12 bg-white rounded-[4rem] relative hover:shadow-2xl hover:shadow-eco-green/5 transition-all duration-500 group border border-slate-50`}>
                  <div className="flex items-center gap-5 mb-6">
                    <span className="bg-eco-green text-white font-black text-xl px-4 py-2 rounded-2xl shadow-lg rotate-3">{event.year}</span>
                    <h4 className="text-3xl font-black text-slate-900 tracking-tight">{event.title}</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium text-lg">
                    {event.desc}
                  </p>
                  
                  {/* Point on timeline */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-[6px] border-eco-green rounded-full shadow-lg hidden md:block ${index % 2 === 0 ? '-right-[68px]' : '-left-[68px]'} group-hover:scale-125 transition-transform`}></div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-video group">
                  <div className="absolute inset-0 bg-eco-forest/20 group-hover:opacity-0 transition-opacity z-10"></div>
                  <img src={`https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800`} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
