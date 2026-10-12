import { useState } from "react";
import { WalletCards, Plus, Trash2 } from "lucide-react";

function Accounts() {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "حساب بانک ملی", balance: 5000000 },
    { id: 2, name: "حساب بانک ملت", balance: 12000000 },
  ]);

  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  function handleAddAccount(e) {
    e.preventDefault();

    if (!name.trim() || balance === "" || Number(balance) < 0) {
      return;
    }

    const newAccount = {
      id: Date.now(),
      name: name.trim(),
      balance: Number(balance),
    };

    setAccounts((prev) => [...prev, newAccount]);
    setName("");
    setBalance("");
  }

  function handleDeleteAccount(id) {
    setAccounts((prev) =>
      prev.filter((account) => account.id !== id)
    );
  }

  const totalBalance = accounts.reduce(
    (total, account) => total + account.balance,
    0
  );

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <WalletCards size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              حساب‌های بانکی
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              حساب‌ها و موجودی‌های خودت رو مدیریت کن.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
          <p className="text-sm text-slate-500 mb-2">
            مجموع موجودی حساب‌ها
          </p>
          <h2 className="text-3xl font-bold text-blue-600">
            {totalBalance.toLocaleString("fa-IR")} تومان
          </h2>
        </div>

        <form
          onSubmit={handleAddAccount}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6"
        >
          <h2 className="font-bold text-slate-800 mb-5">
            افزودن حساب جدید
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="نام حساب بانکی"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="number"
              min="0"
              placeholder="موجودی اولیه (تومان)"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl px-4 py-3 hover:bg-blue-700 transition"
            >
              <Plus size={20} />
              افزودن حساب
            </button>
          </div>
        </form>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h2 className="font-bold text-slate-800">
              فهرست حساب‌ها
            </h2>
          </div>

          {accounts.length === 0 ? (
            <p className="p-8 text-center text-slate-400">
              هنوز حسابی اضافه نشده است.
            </p>
          ) : (
            accounts.map((account) => (
              <div
                key={account.id}
                className="flex items-center justify-between gap-4 p-5 border-b border-slate-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <WalletCards size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {account.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      موجودی حساب
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-bold text-slate-900">
                    {account.balance.toLocaleString("fa-IR")} تومان
                  </span>

                  <button
                    type="button"
                    onClick={() => handleDeleteAccount(account.id)}
                    className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition"
                    aria-label={`حذف ${account.name}`}
                  >
                    <Trash2 size={19} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Accounts;