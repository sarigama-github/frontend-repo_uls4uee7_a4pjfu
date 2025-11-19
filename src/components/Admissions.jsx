import { useState } from 'react'

export default function Admissions() {
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
      const res = await fetch(`${baseUrl}/api/admissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, msg: 'تم إرسال طلب التسجيل بنجاح. سنقوم بالتواصل معكم قريبًا.' })
      else setStatus({ ok: false, msg: data?.detail || 'تعذر إرسال الطلب.' })
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
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">القبول والتسجيل</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="font-bold text-xl mb-4 text-sky-800">شروط التسجيل</h2>
            <ul className="list-disc pr-6 text-slate-700 space-y-2 text-sm">
              <li>نسخة من شهادة الميلاد.</li>
              <li>عدد (4) صور شخصية حديثة.</li>
              <li>كرت التطعيم (للروضة والتمهيدي).</li>
              <li>ملف علاقي وصورة من بطاقة ولي الأمر.</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="font-bold text-xl mb-4 text-sky-800">نموذج التسجيل الإلكتروني</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">اسم الطالب</label>
                <input name="student_name" required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">المرحلة</label>
                <select name="stage" required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option value="nursery">الروضة</option>
                  <option value="kg">التمهيدي</option>
                  <option value="basic">الأساسي</option>
                  <option value="secondary">الثانوي</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">اسم ولي الأمر</label>
                <input name="guardian_name" required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">تاريخ الميلاد</label>
                <input type="date" name="birthdate" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">رقم الهاتف</label>
                <input name="phone" required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">البريد الإلكتروني</label>
                <input type="email" name="email" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">العنوان</label>
                <input name="address" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">ملاحظات</label>
                <textarea name="notes" rows="3" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
              </div>
            </div>
            <button disabled={loading} className="mt-4 w-full px-4 py-2 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-800 disabled:opacity-60">{loading ? 'جارٍ الإرسال...' : 'إرسال الطلب'}</button>
            {status && (
              <div className={`mt-3 text-sm p-3 rounded ${status.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>{status.msg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
