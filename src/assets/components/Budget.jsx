import { useState } from "react";
import { Target, Plus, Trash2 } from "lucide-react";

function Budget() {
  const [budgets, setBudgets] = useState([
    { id: 1, category: "خوراک", amount: 5000000 },
    { id: 2, category: "حمل‌ونقل", amount: 2000000 },
  ]);

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleAddBudget(e) {
    e.preventDefault();

    if (!category.trim() || !amount || Number(amount) <= 0) {
      return;
    }

    const newBudget = {
      id: Date.now(),
      category: category.trim(),
      amount: Number(amount),
    };

    setBudgets((prev) => [...prev, newBudget]);
    setCategory("");
    setAmount("");
  }

  function handleDeleteBudget(id) {
    setBudgets((prev) =>
      prev.filter((budget) => budget.id !== id)
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Target size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              بودجه‌بندی
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              برای هزینه‌های خودت سقف بودجه تعیین کن.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleAddBudget}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6"
        >
          <h2 className="font-bold text-slate-800 mb-5">
            تعیین بودجه جدید
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="نام دسته‌بندی"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="number"
              min="1"
              placeholder="مبلغ بودجه (تومان)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl px-4 py-3 hover:bg-blue-700 transition"
            >
              <Plus size={20} />
              ثبت بودجه
            </button>
          </div>
        </form>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h2 className="font-bold text-slate-800">
              بودجه‌های ثبت‌شده
            </h2>
          </div>

          {budgets.length === 0 ? (
            <p className="p-8 text-center text-slate-400">
              هنوز بودجه‌ای ثبت نشده است.
            </p>
          ) : (
            budgets.map((budget) => (
              <div
                key={budget.id}
                className="flex items-center justify-between gap-4 p-5 border-b border-slate-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Target size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {budget.category}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      سقف بودجه
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-bold text-slate-900">
                    {budget.amount.toLocaleString("fa-IR")} تومان
                  </span>

                  <button
                    type="button"
                    onClick={() => handleDeleteBudget(budget.id)}
                    className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition"
                    aria-label={`حذف بودجه ${budget.category}`}
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

export default Budget;