import { Link } from 'react-router-dom'

export default function Home() {
  const backend = import.meta.env.VITE_BACKEND_URL
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-relaxed">
              مدارس سهيل اليمن النموذجية
              <span className="block text-sky-700 text-2xl md:text-3xl mt-2">تعليم يؤسس للمستقبل</span>
            </h1>
            <p className="mt-4 text-slate-700 leading-relaxed">
              مؤسسة تعليمية أهلية في صنعاء تقدم روضة أطفال، تمهيدي، أساسي، وثانوي ضمن بيئة تربوية آمنة وحديثة.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/admissions" className="px-5 py-3 rounded-lg bg-sky-700 text-white font-semibold hover:bg-sky-800 shadow">التسجيل مفتوح</Link>
              <a href="tel:+967773001616" className="px-5 py-3 rounded-lg border border-sky-700 text-sky-700 font-semibold hover:bg-sky-50">اتصل بنا</a>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-2xl shadow-lg w-full object-cover" src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop" alt="فصول دراسية"/>
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-xl shadow p-4 text-sm">
              <div className="font-bold text-sky-700">بيئة تعلم آمنة</div>
              <div className="text-slate-600">فصول مجهزة ومعلمون أكفاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8">لماذا تختارنا؟</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {title:'كوادر تعليمية مؤهلة',desc:'معلمون متخصصون وذوو خبرة.'},
              {title:'مناهج حديثة',desc:'أساليب تدريس تفاعلية ومختبرات.'},
              {title:'رعاية متكاملة',desc:'اهتمام بالجانب التربوي والنفسي.'},
              {title:'بيئة آمنة',desc:'رقابة مستمرة ومرافق مجهزة.'}
            ].map((f)=> (
              <div key={f.title} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="font-bold text-slate-900">{f.title}</div>
                <div className="text-slate-600 text-sm mt-2 leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-sky-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-2xl font-extrabold">انضموا إلينا اليوم</h3>
          <p className="mt-2 text-sky-100">نساعد أبناءكم على بناء المستقبل بثقة.</p>
          <Link to="/admissions" className="inline-block mt-4 px-6 py-3 bg-white text-sky-800 font-semibold rounded-lg hover:bg-slate-100">قدّم طلب تسجيل</Link>
        </div>
      </section>
    </div>
  )
}
