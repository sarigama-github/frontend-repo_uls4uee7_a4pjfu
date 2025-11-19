import { useState } from 'react'

export default function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, msg: 'تم إرسال رسالتك بنجاح. سنعاود التواصل معك.' })
      else setStatus({ ok: false, msg: data?.detail || 'تعذر إرسال الرسالة.' })
    } catch (err) {
      setStatus({ ok: false, msg: 'تعذر الاتصال بالخادم.' })
    } finally {
      setLoading(false)
      e.currentTarget.reset()
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">تواصل معنا</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-6 h-[420px]">
            <iframe title="الموقع على الخريطة" className="w-full h-full rounded-lg" src="https://www.google.com/maps?q=15.294,44.216&hl=ar&z=14&output=embed"></iframe>
          </div>
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="font-bold text-xl mb-4 text-sky-800">نموذج المراسلة</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">الاسم</label>
                <input name="name" required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">الهاتف</label>
                <input name="phone" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">البريد الإلكتروني</label>
                <input type="email" name="email" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">الموضوع</label>
                <input name="subject" required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">الرسالة</label>
                <textarea name="message" rows="4" required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
              </div>
            </div>
            <button disabled={loading} className="mt-4 w-full px-4 py-2 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-800 disabled:opacity-60">{loading ? 'جارٍ الإرسال...' : 'إرسال الرسالة'}</button>
            <div className="mt-3 text-sm text-slate-600">أرقام التواصل: <a className="underline" href="tel:+967773001616">+967773001616</a></div>
            {status && (
              <div className={`mt-3 text-sm p-3 rounded ${status.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>{status.msg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
