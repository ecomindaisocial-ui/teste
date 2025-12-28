import React from 'react';

interface ContactProps {
  t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-eco-green font-black uppercase tracking-widest text-xs mb-4">{t.badge}</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight">{t.title}<span className="text-eco-green">{t.titleGradient}</span></h3>
          <p className="text-slate-400 text-xl mb-16 leading-relaxed font-medium">
            {t.desc}
          </p>

          <div className="space-y-10">
            {/* Removed the 'Call Us' (ligação) option as requested */}

            <a href="https://wa.me/553197912550" className="flex items-center gap-8 group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-eco-green group-hover:bg-eco-green group-hover:text-white transition-all shadow-2xl">
                <i className="fab fa-whatsapp text-2xl"></i>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="text-2xl font-black">{t.whatsapp}</p>
              </div>
            </a>

            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-eco-green group-hover:bg-eco-green group-hover:text-white transition-all shadow-2xl">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{t.email}</p>
                <p className="text-2xl font-black">ecomindaisocial@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form className="bg-white/5 p-10 md:p-16 rounded-[4rem] border border-white/5 space-y-8 backdrop-blur-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">{t.form.name}</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-eco-green transition-all text-white placeholder:text-slate-600" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">{t.form.email}</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-eco-green transition-all text-white placeholder:text-slate-600" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">{t.form.topic}</label>
              <input 
                type="text" 
                placeholder={t.form.topicPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-eco-green transition-all text-white placeholder:text-slate-600" 
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">{t.form.message}</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-eco-green transition-all text-white resize-none placeholder:text-slate-600"></textarea>
            </div>

            <button type="submit" className="w-full bg-eco-green hover:bg-eco-forest text-white py-6 rounded-2xl font-black text-xl transition-all transform active:scale-95 shadow-2xl shadow-eco-green/10">
              {t.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;