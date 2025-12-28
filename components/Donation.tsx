
import React from 'react';

interface DonationProps {
  t: any;
}

const Donation: React.FC<DonationProps> = ({ t }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-[4rem] p-10 md:p-20 relative overflow-hidden text-center shadow-xl border border-slate-100">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-eco-green/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-eco-forest/5 rounded-full blur-[100px]"></div>

        <div className="relative z-10">
          <div className="w-24 h-24 bg-eco-green rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-eco-green/20 rotate-6 group">
            <i className="fas fa-hand-holding-heart text-4xl text-white group-hover:scale-110 transition-transform"></i>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 tracking-tight leading-tight">{t.title}</h2>
          <p className="text-slate-600 text-xl mb-16 max-w-2xl mx-auto font-medium">
            {t.desc}
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {t.tiers.map((tier: any, i: number) => (
              <div key={i} className="p-10 bg-eco-cream rounded-[3rem] border border-eco-green/5 hover:border-eco-green/30 hover:bg-white hover:shadow-2xl transition-all cursor-pointer group">
                <p className="text-eco-forest font-black text-xs uppercase tracking-widest mb-4">{tier.label}</p>
                <h4 className="text-4xl font-black text-slate-900 mb-4">{tier.amount}</h4>
                <p className="text-[11px] text-slate-500 font-extrabold uppercase tracking-widest">{tier.perk}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-eco-green text-white rounded-[2rem] font-bold text-xl hover:bg-eco-forest transition-all shadow-xl shadow-eco-green/20">
              <i className="fab fa-paypal mr-3"></i> {t.paypal}
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white rounded-[2rem] font-bold text-xl hover:bg-black transition-all shadow-xl">
              <i className="fab fa-ethereum mr-3"></i> {t.crypto}
            </button>
          </div>

          <p className="mt-12 text-slate-400 text-sm italic font-medium">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donation;
