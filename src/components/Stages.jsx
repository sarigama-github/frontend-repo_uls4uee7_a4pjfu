export default function Stages() {
  const stages = [
    { key:'nursery', title:'الروضة', desc:'تنمية مهارات الطفل في بيئة محببة وآمنة.' },
    { key:'kg', title:'التمهيدي', desc:'تهيئة متكاملة لاكتساب مهارات القراءة والكتابة.' },
    { key:'basic', title:'الأساسي', desc:'تعليم أساسي وفق مناهج حديثة ومرافق مجهزة.' },
    { key:'secondary', title:'الثانوي', desc:'تأهيل أكاديمي متقدم استعدادًا للجامعة.' },
  ]
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">المراحل الدراسية</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map(s => (
            <div key={s.key} className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-xl font-bold text-slate-900">{s.title}</div>
              <p className="text-slate-700 text-sm mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
