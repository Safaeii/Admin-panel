
function RecentTransactions({ transactions }) {
  return (
    <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm">

      <h2 className="p-6 text-lg font-bold text-slate-900 border-b border-slate-200">
        آخرین تراکنش‌ها
      </h2>

      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="p-5 flex items-center justify-between border-b border-slate-100"
        >

          <span className="font-semibold text-slate-800">
            {transaction.title}
          </span>

<span
  className={`font-bold ${
    transaction.type === "درآمد"
      ? "text-blue-600"
      : "text-red-500"
  }`}
>
  {transaction.amount.toLocaleString()} تومان
</span>
        </div>
      ))}

    </div>
  );
}

export default RecentTransactions;
