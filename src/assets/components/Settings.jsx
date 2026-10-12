import { useState } from "react";
import { Settings as SettingsIcon, Bell, Moon, Save } from "lucide-react";

function Settings() {
  const [currency, setCurrency] = useState("تومان");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState("");

  function handleSave(e) {
    e.preventDefault();

    localStorage.setItem(
      "appSettings",
      JSON.stringify({ currency, notifications, darkMode })
    );

    setMessage("تنظیمات با موفقیت ذخیره شد.");

    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-8" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <SettingsIcon size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">تنظیمات</h1>
            <p className="text-sm text-slate-500 mt-1">
              تنظیمات برنامه را مدیریت کن.
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="py-5 border-b border-slate-100">
            <label className="block font-semibold text-slate-800 mb-3">
              واحد پول
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="تومان">تومان</option>
              <option value="ریال">ریال</option>
            </select>
          </div>

          <div className="flex items-center justify-between gap-4 py-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Bell size={21} className="text-slate-500" />
              <div>
                <h3 className="font-semibold text-slate-800">اعلان‌ها</h3>
                <p className="text-sm text-slate-500 mt-1">فعال‌سازی اعلان‌ها</p>
              </div>
            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="w-5 h-5 accent-blue-600"
            />
          </div>

          <div className="flex items-center justify-between gap-4 py-5">
            <div className="flex items-center gap-3">
              <Moon size={21} className="text-slate-500" />
              <div>
                <h3 className="font-semibold text-slate-800">حالت تاریک</h3>
                <p className="text-sm text-slate-500 mt-1">ذخیره ترجیح حالت نمایش</p>
              </div>
            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="w-5 h-5 accent-blue-600"
            />
          </div>

          {message && (
            <p className="text-sm text-emerald-600 mb-4">{message}</p>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl px-4 py-3 hover:bg-blue-700 transition"
          >
            <Save size={19} />
            ذخیره تنظیمات
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;