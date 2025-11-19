import { useEffect, useState } from 'react'

export function AboutSection(){
  return (
    <section className="py-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">حول المدرسة</h2>
        <p className="text-slate-700 leading-8">رؤيتنا: بناء جيل متعلم بمهارات القرن الحادي والعشرين وقيم راسخة. رسالتنا: تقديم تعليم نوعي بأحدث الأساليب التربوية وإدارة فعّالة وهيئة تعليمية متميزة.</p>
      </div>
    </section>
  )
}

export function StagesGrid(){
  const [stages, setStages] = useState([])
  useEffect(()=>{ fetch(import.meta.env.VITE_BACKEND_URL + '/api/stages').then(r=>r.json()).then(setStages).catch(()=>{}) },[])
  const fallbacks = [
    {key:'nursery', title:'الروضة', description:'بيئة تربوية آمنة لتنمية مهارات الطفل.'},
    {key:'kg', title:'التمهيدي', description:'تهيئة الطفل للمرحلة الأساسية.'},
    {key:'basic', title:'الأساسي', description:'تعليم أساسي متكامل وفق أحدث المناهج.'},
    {key:'secondary', title:'الثانوي', description:'تأهيل أكاديمي قوي للاستعداد للجامعة.'},
  ]
  const data = stages?.length? stages : fallbacks
  return (
    <section className="py-12 bg-slate-50" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-6">المراحل الدراسية</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((s)=> (
            <div key={s.key} className="rounded-xl bg-white border border-slate-200 p-4">
              <div className="font-bold text-slate-800">{s.title}</div>
              <p className="text-sm text-slate-600 mt-2">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCTA(){
  return (
    <section className="py-12" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-emerald-600 p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-extrabold">هل لديك استفسار؟</h3>
            <p className="text-white/90">تواصل معنا مباشرة وسنعود إليك بأقرب وقت.</p>
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="rounded-lg bg-white text-slate-900 px-4 py-2 font-semibold">نموذج المراسلة</a>
            <a href="tel:+967773001616" className="rounded-lg bg-white/10 border border-white/30 text-white px-4 py-2 font-semibold hover:bg-white/20">اتصال سريع</a>
          </div>
        </div>
      </div>
    </section>
  )
}
