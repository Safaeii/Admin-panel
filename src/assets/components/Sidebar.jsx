import {
  LayoutDashboard,
  ArrowLeftRight,
  BarChart3,
  UserRound,
  Settings,
  Tags,
  Target,
  WalletCards,
} from "lucide-react";



import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {

  return (
<aside
  className={`${
    isOpen
      ? "w-64 translate-x-0"
      : "w-0 -translate-x-full overflow-hidden p-0 border-0 "
  } shrink-0 min-h-screen bg-white border-l border-slate-200 transition-all duration-300`}
  dir="rtl"
>
      <div className="mb-8 mt-10 mr-10">
        <h1 className="text-xl font-bold text-slate-900">
          مدیریت مالی
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          پنل مدیریت
        </p>
      </div>

      <nav className="space-y-2  px-5">

        <Link
          to="/"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white"
        >
          <LayoutDashboard size={20} />
          <span>داشبورد</span>
        </Link>

        <Link
          to="/transactions"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
        >
          <ArrowLeftRight size={20} />
          <span>تراکنش‌ها</span>
        </Link>

        <Link
          to="/reports"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
        >
          <BarChart3 size={20} />
          <span>گزارش‌ها</span>
        </Link>

        <Link
          to="/profile"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
        >
          <UserRound size={20} />
          <span>پروفایل</span>
        </Link>

        <Link
          to="/settings"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
        >
          <Settings size={20} />
          <span>تنظیمات</span>
        </Link>
<Link
  to="/categories"
  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
>
  <Tags size={20} />
  <span>دسته‌بندی‌ها</span>
</Link>

<Link
  to="/budget"
  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
>
  <Target size={20} />
  <span>بودجه‌بندی</span>
</Link>

<Link
  to="/accounts"
  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
>
  <WalletCards size={20} />
  <span>حساب‌های بانکی</span>
</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;

