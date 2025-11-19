export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src="/logo.svg" onError={(e)=>{e.currentTarget.src='https://dummyimage.com/80x80/0ea5e9/ffffff&text=SY'}} alt="logo" className="w-10 h-10" />
            <div>
              <div className="font-bold">مدارس سهيل اليمن النموذجية</div>
              <div className="text-xs text-slate-300">الأصبحي – شارع بيحان – صنعاء</div>
            </div>
          </div>
          <p className="text-sm text-slate-300">مؤسسة تعليمية أهلية تقدّم روضة، تمهيدي، أساسي، وثانوي وفق أحدث الأساليب التربوية.</p>
        </div>
        <div>
          <h4 className="font-bold mb-3">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><a href="/stages" className="hover:text-white">المراحل الدراسية</a></li>
            <li><a href="/admissions" className="hover:text-white">القبول والتسجيل</a></li>
            <li><a href="/gallery" className="hover:text-white">معرض الصور</a></li>
            <li><a href="/news" className="hover:text-white">الأخبار والإعلانات</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">تواصل معنا</h4>
          <p className="text-sm text-slate-300">الهاتف: <a className="underline" href="tel:+967773001616">+967773001616</a></p>
          <p className="text-sm text-slate-300">الموقع: الأصبحي – شارع بيحان – صنعاء</p>
          <div className="mt-3">
            <a href="/contact" className="inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 bg-white rounded-lg shadow hover:bg-slate-200">أرسل رسالة</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 text-center text-xs text-slate-400 py-4">© {new Date().getFullYear()} مدارس سهيل اليمن - جميع الحقوق محفوظة</div>
    </footer>
  )
}
