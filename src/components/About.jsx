export default function About() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">حول المدرسة</h1>
        <p className="text-slate-700 leading-relaxed mb-6">
          مدارس سهيل اليمن النموذجية مؤسسة تعليمية رائدة في صنعاء، تقدم بيئة تعليمية حديثة ومتكاملة تراعي الجوانب الأكاديمية والتربوية.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="font-bold text-xl mb-3 text-sky-800">الرؤية</h2>
            <p className="text-slate-700">إعداد جيل واعٍ مبدع يمتلك مهارات القرن الحادي والعشرين ويواكب المعايير العالمية.</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="font-bold text-xl mb-3 text-sky-800">الرسالة</h2>
            <p className="text-slate-700">تقديم تعليم عالي الجودة في بيئة جاذبة وآمنة، يشارك فيه الطالب والمعلم وولي الأمر بفاعلية.</p>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-xl mb-3 text-sky-800">القيم</h2>
          <ul className="list-disc pr-6 text-slate-700 space-y-1">
            <li>التميّز</li>
            <li>المسؤولية</li>
            <li>الانتماء</li>
            <li>الإبداع</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
