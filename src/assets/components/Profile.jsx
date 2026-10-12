
function Profile() {
  return (
    <div
      className="min-h-screen bg-slate-100 p-6"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          <div className="flex items-center gap-5 mb-8">

            <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
              ا
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                پروفایل کاربر
              </h1>

              <p className="text-sm text-slate-400 mt-1">
                اطلاعات حساب کاربری
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm text-slate-500 mb-2">
                نام و نام خانوادگی
              </label>

              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-500 mb-2">
                ایمیل
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

          </div>

          <button
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            ذخیره تغییرات
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;

