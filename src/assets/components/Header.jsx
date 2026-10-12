import { Wallet, UserRound , Menu} from "lucide-react";

function Header({ onToggleSidebar }) {
  return (
    <header className="px-6 pt-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
       <button
  onClick={onToggleSidebar}
  className="p-2 rounded-lg hover:bg-slate-100 transition"
>
  <Menu size={22} />
</button>
          <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            <Wallet size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              مدیریت مالی
            </h1>

            <p className="text-xs text-slate-400 mt-1">
              مدیریت دخل و خرج شخصی
            </p>
          </div>
        </div>

        <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition">
          <UserRound size={19} />
        </button>

      </div>
    </header>
  );
}

export default Header;

