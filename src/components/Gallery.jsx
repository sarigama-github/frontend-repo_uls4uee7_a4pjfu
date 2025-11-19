import { useEffect, useState } from 'react'

export default function Gallery() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''
  const [items, setItems] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${baseUrl}/api/gallery`)
        const data = await res.json()
        if (Array.isArray(data)) setItems(data)
      } catch {}
    }
    load()
  }, [baseUrl])

  const fallback = [
    {url:'https://images.unsplash.com/photo-1596495578065-8a35d2d0c7b3?q=80&w=1200&auto=format&fit=crop', caption:'المدرسة'},
    {url:'https://images.unsplash.com/photo-1596495578065-421a0ef35ba3?q=80&w=1200&auto=format&fit=crop', caption:'فصل دراسي'},
    {url:'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop', caption:'مختبر علوم'},
  ]

  const list = items.length ? items : fallback

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">معرض الصور</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((g, i) => (
            <figure key={i} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img src={g.url} alt={g.caption || 'صورة'} className="w-full h-56 object-cover hover:scale-105 transition-transform" />
              {g.caption && <figcaption className="p-3 text-sm text-slate-700">{g.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
