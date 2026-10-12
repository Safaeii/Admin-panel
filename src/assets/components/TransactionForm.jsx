
import { useState, useEffect } from "react";

function TransactionForm({
  onClose,
  onAddTransaction,
  transaction,
  onEditTransaction,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("هزینه");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (transaction) {
      setTitle(transaction.title);
      setAmount(transaction.amount);
      setType(transaction.type);
      setCategory(transaction.category);
    } else {
      setTitle("");
      setAmount("");
      setType("هزینه");
      setCategory("");
    }

    setError("");
  }, [transaction]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !amount || !category.trim()) {
      setError("لطفاً همه فیلدها را کامل کنید");
      return;
    }

    if (Number(amount) <= 0) {
      setError("مبلغ باید بیشتر از صفر باشد");
      return;
    }

    const newTransaction = {
      id: transaction ? transaction.id : Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type,
      category: category.trim(),

      date: transaction
        ? transaction.date
        : new Date().toLocaleDateString("fa-IR"),

      time: transaction
        ? transaction.time
        : new Date().toLocaleTimeString("fa-IR"),
    };

    if (transaction) {
      onEditTransaction(newTransaction);
    } else {
      onAddTransaction(newTransaction);
    }

    setTitle("");
    setAmount("");
    setType("هزینه");
    setCategory("");
    setError("");

    onClose();
  }

  return (
    <div className="mb-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

      <h2 className="text-lg font-bold text-slate-900 mb-5">
        {transaction ? "ویرایش تراکنش" : "افزودن تراکنش جدید"}
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-4">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        <input
          type="text"
          placeholder="عنوان تراکنش"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
          className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />

        <input
          type="number"
          placeholder="مبلغ"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            setError("");
          }}
          className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />

        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setError("");
          }}
          className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="هزینه">هزینه</option>
          <option value="درآمد">درآمد</option>
        </select>

       <select
  value={category}
  onChange={(e) => {
    setCategory(e.target.value);
    setError("");
  }}
  className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 bg-white"
>
  <option value="">انتخاب دسته‌بندی</option>
  <option value="خوراک">خوراک</option>
  <option value="حمل‌ونقل">حمل‌ونقل</option>
  <option value="خرید">خرید</option>
  <option value="اجاره و مسکن">اجاره و مسکن</option>
  <option value="درمان و سلامت">درمان و سلامت</option>
  <option value="تفریح">تفریح</option>
  <option value="قبوض">قبوض</option>
  <option value="آموزش">آموزش</option>
  <option value="حقوق">حقوق</option>
  <option value="هدیه">هدیه</option>
  <option value="سایر">سایر</option>
</select>
        <div className="md:col-span-2 flex gap-3 justify-end">

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
          >
            لغو
          </button>

          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {transaction ? "ذخیره تغییرات" : "افزودن تراکنش"}
          </button>

        </div>

      </form>
    </div>
  );
}

export default TransactionForm;

