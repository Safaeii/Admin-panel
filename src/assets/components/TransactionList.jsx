function TransactionList({
  transactions,
  onDelete,
  onEdit,
  totalTransactions,
}) {
  return (
    <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm">

      <div className="p-6 border-b border-slate-200">
        <h2 className="text-lg font-bold text-slate-900">
          تراکنش‌ها
        </h2>
      </div>

      <div className="divide-y divide-slate-100">

        {totalTransactions === 0 ? (
          <p className="p-6 text-center text-slate-400">
            هنوز تراکنشی ثبت نشده است
          </p>
        ) : transactions.length === 0 ? (
          <p className="p-6 text-center text-slate-400">
            تراکنشی با این جستجو یا فیلتر پیدا نشد
          </p>
        ) : (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="p-5 flex items-center justify-between"
            >

              <div>
                <h3 className="font-semibold text-slate-800">
                  {transaction.title}
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                  {transaction.category}
                </p>
              </div>

              <div className="flex items-center gap-4">

                <div className="text-left">
                  <p className="font-bold text-slate-900">
                    {transaction.amount.toLocaleString()} تومان
                  </p>

                  <span className="text-xs text-slate-400">
                    {transaction.type}
                  </span>
                </div>

                <button
                  onClick={() => onDelete(transaction.id)}
                  className="text-red-500 hover:text-red-700 bg-red-100 rounded-xl px-4 py-2"
                >
                  حذف
                </button>

                <button
                  onClick={() => onEdit(transaction)}
                  className="text-blue-500 hover:text-blue-700 bg-blue-100 rounded-xl px-4 py-2"
                >
                  ویرایش
                </button>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default TransactionList;