import { useEffect, useState } from 'react'

export function AboutPage(){
  return (
    <main dir="rtl" className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">حول المدرسة</h1>
        <p className="text-slate-700 leading-8">نؤمن برسالة التعليم ودوره في بناء الأوطان. رؤيتنا أن نكون الخيار التعليمي الأول في صنعاء من خلال تقديم تعليم نوعي، وكادر مؤهل، وإدارة فعّالة، وبيئة تعلم آمنة ومحفزة.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-xl border border-slate-200 p-5 bg-white">
            <h3 className="font-bold text-slate-900 mb-2">الرؤية</h3>
            <p className="text-slate-700">بناء جيل واعٍ مبدع معتز بهويته الإسلامية والوطنية، قادر على المنافسة والابتكار.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 bg-white">
            <h3 className="font-bold text-slate-900 mb-2">الرسالة</h3>
            <p className="text-slate-700">تقديم تعليم متوازن يركز على المهارات والمعارف والقيم، عبر مناهج حديثة وكادر متميز.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 bg-white md:col-span-2">
            <h3 className="font-bold text-slate-900 mb-2">القيم</h3>
            <p className="text-slate-700">الانضباط، الإتقان، الاحترام، التعاون، المسؤولية.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export function StagesPage(){
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
    <main dir="rtl" className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">المراحل الدراسية</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((s)=> (
            <div key={s.key} className="rounded-xl bg-white border border-slate-200 p-5">
              <div className="font-bold text-slate-800">{s.title}</div>
              <p className="text-sm text-slate-600 mt-2">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export function AdmissionsPage(){
  return (
    <main dir="rtl" className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">القبول والتسجيل</h1>
        <AdmissionsForm/>
      </div>
    </main>
  )
}

function AdmissionsForm(){
  const [status, setStatus] = useState(null)
  const submit = async (e)=>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try{
      const r = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/admissions', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)})
      const data = await r.json()
      setStatus(r.ok? {ok:true, id:data.id} : {ok:false, msg:data.detail || 'لم يتم الإرسال'})
      if(r.ok) e.currentTarget.reset()
    }catch(err){ setStatus({ok:false, msg: err.message}) }
  }
  return (
    <form onSubmit={submit} className="space-y-4 bg-white rounded-xl border border-slate-200 p-6" dir="rtl">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="student_name" label="اسم الطالب" required/>
        <Field name="guardian_name" label="ولي الأمر" required/>
        <Field name="phone" label="رقم الهاتف" required/>
        <Field name="email" label="البريد الإلكتروني" type="email"/>
        <Field name="birthdate" label="تاريخ الميلاد" type="date"/>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">المرحلة</label>
          <select name="stage" className="w-full rounded-lg border-slate-300 focus:ring-sky-500 focus:border-sky-500">
            <option value="nursery">الروضة</option>
            <option value="kg">التمهيدي</option>
            <option value="basic">الأساسي</option>
            <option value="secondary">الثانوي</option>
          </select>
        </div>
      </div>
      <Field name="address" label="العنوان"/>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">ملاحظات</label>
        <textarea name="notes" rows="4" className="w-full rounded-lg border-slate-300 focus:ring-sky-500 focus:border-sky-500"/>
      </div>
      <button className="rounded-lg bg-sky-600 text-white px-4 py-2 font-semibold hover:bg-sky-700">إرسال الطلب</button>
      {status && (
        <div className={`mt-2 text-sm ${status.ok? 'text-emerald-700':'text-red-700'}`}>
          {status.ok? 'تم إرسال الطلب بنجاح' : status.msg}
        </div>
      )}
    </form>
  )
}

function Field({name,label,type='text', required}){
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1">{label}</label>
      <input name={name} type={type} required={required} className="w-full rounded-lg border-slate-300 focus:ring-sky-500 focus:border-sky-500"/>
    </div>
  )
}

export function GalleryPage(){
  const [images,setImages] = useState([])
  useEffect(()=>{ fetch(import.meta.env.VITE_BACKEND_URL + '/api/gallery').then(r=>r.json()).then(setImages).catch(()=>{}) },[])
  return (
    <main dir="rtl" className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">معرض الصور</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(images?.length? images : new Array(8).fill(0).map((_,i)=>({url:`https://picsum.photos/seed/${i}/600/400`})) ).map((img,i)=> (
            <img key={i} src={img.url} alt={img.caption||'صورة'} className="rounded-xl object-cover w-full h-48"/>
          ))}
        </div>
      </div>
    </main>
  )
}

export function NewsPage(){
  const [news,setNews] = useState([])
  useEffect(()=>{ fetch(import.meta.env.VITE_BACKEND_URL + '/api/news').then(r=>r.json()).then(setNews).catch(()=>{}) },[])
  return (
    <main dir="rtl" className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">الأخبار والإعلانات</h1>
        <div className="space-y-4">
          {(news?.length? news : [{title:'إعلان: بدء التسجيل للعام الدراسي الجديد', body:'تعلن مدارس سهيل اليمن عن فتح باب التسجيل للعام الدراسي القادم...'}]).map((n,i)=> (
            <article key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">{n.title}</h3>
              <p className="text-slate-700 mt-2 leading-7">{n.body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export function ContactPage(){
  return (
    <main dir="rtl" className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">تواصل معنا</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-slate-200 p-5 bg-white">
            <h3 className="font-bold mb-2">موقعنا</h3>
            <p className="text-slate-700">الأصبحي – شارع بيحان – صنعاء</p>
            <div className="mt-4">
              <iframe title="map" className="w-full h-72 rounded-lg" loading="lazy" allowFullScreen src="https://www.google.com/maps?q=15.3044,44.2069&z=14&output=embed"></iframe>
            </div>
          </div>
          <div>
            <ContactForm/>
          </div>
        </div>
      </div>
    </main>
  )
}

function ContactForm(){
  const [status,setStatus] = useState(null)
  const submit = async (e)=>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try{
      const r = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/contact', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)})
      const data = await r.json()
      setStatus(r.ok? {ok:true} : {ok:false, msg:data.detail || 'لم يتم الإرسال'})
      if(r.ok) e.currentTarget.reset()
    }catch(err){ setStatus({ok:false, msg: err.message}) }
  }
  return (
    <form onSubmit={submit} className="rounded-xl border border-slate-200 p-5 bg-white" dir="rtl">
      <h3 className="font-bold mb-2">نموذج المراسلة</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="name" label="الاسم" required/>
        <Field name="phone" label="الهاتف"/>
        <Field name="email" label="البريد الإلكتروني" type="email"/>
        <Field name="subject" label="الموضوع" required/>
      </div>
      <div className="mt-3">
        <label className="block text-sm font-semibold text-slate-700 mb-1">الرسالة</label>
        <textarea name="message" rows="5" className="w-full rounded-lg border-slate-300 focus:ring-sky-500 focus:border-sky-500"/>
      </div>
      <button className="mt-4 rounded-lg bg-sky-600 text-white px-4 py-2 font-semibold hover:bg-sky-700">إرسال</button>
      {status && (
        <div className={`mt-2 text-sm ${status.ok? 'text-emerald-700':'text-red-700'}`}>
          {status.ok? 'تم إرسال الرسالة بنجاح' : status.msg}
        </div>
      )}
    </form>
  )
}

function Field({name,label,type='text', required}){
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1">{label}</label>
      <input name={name} type={type} required={required} className="w-full rounded-lg border-slate-300 focus:ring-sky-500 focus:border-sky-500"/>
    </div>
  )
}
