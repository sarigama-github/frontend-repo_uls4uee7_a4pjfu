import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'حول المدرسة' },
  { to: '/stages', label: 'المراحل الدراسية' },
  { to: '/admissions', label: 'القبول والتسجيل' },
  { to: '/gallery', label: 'معرض الصور' },
  { to: '/news', label: 'الأخبار والإعلانات' },
  { to: '/contact', label: 'تواصل معنا' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" onError={(e)=>{e.currentTarget.src='https://dummyimage.com/80x80/0ea5e9/ffffff&text=SY'}} alt="شعار المدارس" className="w-10 h-10" />
            <div className="leading-tight">
              <div className="text-sky-700 font-extrabold">مدارس سهيل اليمن</div>
              <div className="text-xs text-slate-600">النموذجية - صنعاء</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm font-medium hover:text-sky-700 transition ${isActive ? 'text-sky-700' : 'text-slate-700'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <a href="tel:+967773001616" className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow">اتصل الآن</a>
          </nav>

          <button className="md:hidden p-2 rounded border border-slate-300" onClick={() => setOpen(!open)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={()=>setOpen(false)} className={({ isActive }) => `block text-sm font-medium py-2 ${isActive ? 'text-sky-700' : 'text-slate-700'}`}>
                {item.label}
              </NavLink>
            ))}
            <a href="tel:+967773001616" className="block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow">اتصل الآن</a>
          </div>
        </div>
      )}
    </header>
  )
}
