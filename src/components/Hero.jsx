import { Phone, ArrowLeftRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white" dir="rtl">
      <div className="absolute -top-24 -end-24 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl"/>
      <div className="absolute -bottom-24 -start-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"/>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2]">مدارس سهيل اليمن النموذجية</h1>
            <p className="mt-4 text-lg text-slate-700 max-w-prose">تعليم عصري بقيم أصيلة في قلب صنعاء. نقدم برامج الروضة، التمهيدي، الأساسي والثانوي ضمن بيئة تعلم آمنة ومحفزة.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-lg bg-sky-600 text-white px-4 py-2.5 font-semibold shadow-sm hover:bg-sky-700">التسجيل الإلكتروني</Link>
              <a href="tel:+967773001616" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 text-slate-700 px-4 py-2.5 font-semibold hover:bg-white"><Phone className="h-4 w-4"/>اتصال سريع</a>
            </div>
            <div className="mt-6 text-xs text-slate-500">الأصبحي – شارع بيحان – صنعاء</div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img className="rounded-xl shadow-sm object-cover h-44 w-full" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" alt="فصل دراسي"/>
              <img className="rounded-xl shadow-sm object-cover h-44 w-full" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" alt="طلاب"/>
              <img className="rounded-xl shadow-sm object-cover h-44 w-full" src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop" alt="مختبر"/>
              <img className="rounded-xl shadow-sm object-cover h-44 w-full" src="https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=800&auto=format&fit=crop" alt="ملعب"/>
            </div>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["بيئة آمنة ومحفزة","كادر مؤهل","مناهج حديثة","أنشطة ولاصفيّة"].map((f)=> (
            <div key={f} className="rounded-xl border border-slate-200 p-4 bg-white/60">
              <div className="font-bold text-slate-800">{f}</div>
              <p className="text-sm text-slate-600 mt-1">نلتزم بتوفير أفضل تجربة تعليمية للطلاب بمختلف المراحل.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
