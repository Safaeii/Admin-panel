import { useContext } from "react";
import { BarChart3, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import TransactionContext from "../../context/TransactionContext";

function Reports() {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((item) => item.type === "درآمد")
    .reduce((total, item) => total + Number(item.amount), 0);

  const expenses = transactions
    .filter((item) => item.type === "هزینه")
    .reduce((total, item) => total + Number(item.amount), 0);

  const reports = [
    {
      title: "مجموع درآمد",
      amount: income,
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "مجموع هزینه",
      amount: expenses,
      icon: TrendingDown,
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      title: "مانده حساب",
      amount: income - expenses,
      icon: Wallet,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <BarChart3 size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">گزارش‌ها</h1>
            <p className="text-sm text-slate-500 mt-1">
              خلاصه‌ای از وضعیت مالی شما
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reports.map((report) => {
            const Icon = report.icon;

            return (
              <div
                key={report.title}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <div className={`w-11 h-11 rounded-xl ${report.bg} ${report.color} flex items-center justify-center mb-5`}>
                  <Icon size={22} />
                </div>

                <p className="text-sm text-slate-500">{report.title}</p>
                <h2 className={`text-2xl font-bold mt-2 ${report.color}`}>
                  {report.amount.toLocaleString("fa-IR")} تومان
                </h2>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-6 shadow-sm">
          <h2 className="font-bold text-slate-800 mb-6">مقایسه درآمد و هزینه</h2>

          {[
            { title: "درآمد", amount: income, color: "bg-emerald-500" },
            { title: "هزینه", amount: expenses, color: "bg-red-500" },
          ].map((item) => {
            const maxAmount = Math.max(income, expenses, 1);
            const percentage = (item.amount / maxAmount) * 100;

            return (
              <div key={item.title} className="mb-6 last:mb-0">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">{item.title}</span>
                  <span className="font-semibold text-slate-800">
                    {item.amount.toLocaleString("fa-IR")} تومان
                  </span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Reports;