import { useEffect, useState } from 'react'

export default function News() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''
  const [items, setItems] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${baseUrl}/api/news`)
        const data = await res.json()
        if (Array.isArray(data)) setItems(data)
      } catch {}
    }
    load()
  }, [baseUrl])

  const fallback = [
    {title:'انطلاق العام الدراسي الجديد', body:'نرحب بطلابنا الأعزاء ونتمنى لهم عامًا مليئًا بالنجاح.'},
    {title:'افتتاح مختبر حاسوب جديد', body:'تم تجهيز المختبر بأحدث الأجهزة لدعم تعلم الطلاب.'},
  ]

  const list = items.length ? items : fallback

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">الأخبار والإعلانات</h1>
        <div className="space-y-4">
          {list.map((n, i) => (
            <article key={i} className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-lg text-slate-900">{n.title}</h3>
              <p className="text-slate-700 text-sm mt-2 leading-relaxed">{n.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
