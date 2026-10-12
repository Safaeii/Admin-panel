import { useState, useContext } from "react";

import TransactionContext from "./context/TransactionContext";


import SummaryCards from "./assets/components/SummaryCards";
import TransactionForm from "./assets/components/TransactionForm";
import TransactionList from "./assets/components/TransactionList";
import FinancialChart from "./assets/components/FinancialChart";
import RecentTransactions from "./assets/components/RecentTransactions";
import ExpensePieChart from "./assets/components/ExpensePieChart";

function App() {
  const {
    transactions,
    addTransaction,
    deleteTransaction,
    editTransaction,
  } = useContext(TransactionContext);

  const [showForm, setShowForm] = useState(false);

  const [editingTransaction, setEditingTransaction] = useState(null);

  const [filter, setFilter] = useState("همه");

  const [search, setSearch] = useState("");

  function handleStartEdit(transaction) {
    setEditingTransaction(transaction);
    setShowForm(true);
  }

  function handleCloseForm() {
    setShowForm(false);
    setEditingTransaction(null);
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesFilter =
      filter === "همه" || transaction.type === filter;

    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div
      className="min-h-screen bg-slate-100 text-slate-800"
      dir="rtl"
    >


      <main className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex items-center justify-between mb-7">

          <div>
            <p className="text-sm text-slate-400 mb-1">
              داشبورد
            </p>

            <h2 className="text-2xl font-bold text-slate-900">
              وضعیت مالی
            </h2>
          </div>

          <button
            onClick={() => {
              setEditingTransaction(null);
              setShowForm(true);
            }}
            className="bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition"
          >
            افزودن تراکنش
          </button>

        </div>

        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <input
            type="text"
            placeholder="جستجوی تراکنش..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-blue-500"
          />

          <div className="flex gap-2">

            <button
              onClick={() => setFilter("همه")}
              className={`px-4 py-2 rounded-xl ${
                filter === "همه"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              همه
            </button>

            <button
              onClick={() => setFilter("درآمد")}
              className={`px-4 py-2 rounded-xl ${
                filter === "درآمد"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              درآمد
            </button>

            <button
              onClick={() => setFilter("هزینه")}
              className={`px-4 py-2 rounded-xl ${
                filter === "هزینه"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              هزینه
            </button>

          </div>
        </div>

        {showForm && (
          <TransactionForm
            onClose={handleCloseForm}
            onAddTransaction={addTransaction}
            onEditTransaction={editTransaction}
            transaction={editingTransaction}
          />
        )}

        <SummaryCards transactions={transactions} />

        <FinancialChart transactions={transactions} />
<ExpensePieChart />
        <RecentTransactions transactions={transactions} />

        <TransactionList
          transactions={filteredTransactions}
          totalTransactions={transactions.length}
          onDelete={deleteTransaction}
          onEdit={handleStartEdit}
        />

      </main>
    </div>
  );
}

export default App;