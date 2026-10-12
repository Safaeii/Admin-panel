import { useContext, useState } from "react";
import { ArrowLeftRight, Search } from "lucide-react";
import TransactionContext from "../../context/TransactionContext";

function Transactions() {
  const { transactions } = useContext(TransactionContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("همه");

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesFilter =
      filter === "همه" || transaction.type === filter;

    const matchesSearch = [
      transaction.title,
      transaction.category,
    ]
      .filter(Boolean)
      .some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <ArrowLeftRight size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">تراکنش‌ها</h1>
            <p className="text-sm text-slate-500 mt-1">
              جست‌وجو و مشاهده درآمدها و هزینه‌ها
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="جست‌وجو بر اساس عنوان یا دسته‌بندی..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-slate-200 rounded-xl pr-11 pl-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="همه">همه تراکنش‌ها</option>
              <option value="درآمد">فقط درآمدها</option>
              <option value="هزینه">فقط هزینه‌ها</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="font-bold text-slate-800">
              فهرست تراکنش‌ها ({filteredTransactions.length})
            </h2>
          </div>

          {filteredTransactions.length === 0 ? (
            <p className="p-10 text-center text-slate-400">
              تراکنشی مطابق جست‌وجوی شما پیدا نشد.
            </p>
          ) : (
            filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 border-b border-slate-100 last:border-0"
              >
                <div>
                  <h3 className="font-semibold text-slate-800">
                    {transaction.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {transaction.category || "بدون دسته‌بندی"}
                  </p>
                </div>

                <div className="sm:text-left">
                  <p
                    className={`font-bold ${
                      transaction.type === "درآمد"
                        ? "text-emerald-600"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "درآمد" ? "+" : "-"}
                    {Number(transaction.amount).toLocaleString("fa-IR")} تومان
                  </p>
                  <span className="text-xs text-slate-400">
                    {transaction.type}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Transactions;