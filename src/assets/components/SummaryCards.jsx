import { Wallet, TrendingUp, CreditCard } from "lucide-react";

function SummaryCards({ transactions }) {
  const income = transactions.filter(
    (transaction) => transaction.type === "درآمد"
  );

  const totalIncome = income.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const expense = transactions.filter(
    (transaction) => transaction.type === "هزینه"
  );

  const totalExpense = expense.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const balance = totalIncome - totalExpense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      {/* Balance */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Wallet size={22} />
          </div>

          <span className="text-sm text-slate-400">
            موجودی
          </span>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-6">
          {balance.toLocaleString()} تومان
        </h2>
      </div>

      {/* Income */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <TrendingUp size={22} />
          </div>

          <span className="text-sm text-slate-400">
            درآمد
          </span>
        </div>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">
          {totalIncome.toLocaleString()} تومان
        </h2>
      </div>

      {/* Expense */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
            <CreditCard size={22} />
          </div>

          <span className="text-sm text-slate-400">
            هزینه
          </span>
        </div>

        <h2 className="text-2xl font-bold text-slate-700 mt-6">
          {totalExpense.toLocaleString()} تومان
        </h2>
      </div>

    </div>
  );
}

export default SummaryCards;