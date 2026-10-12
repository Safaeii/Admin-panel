// import { useContext } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import TransactionContext from "../../context/TransactionContext";

// const COLORS = [
//   "#3B82F6",
//   "#10B981",
//   "#F59E0B",
//   "#EF4444",
//   "#8B5CF6",
//   "#EC4899",
// ];

// function ExpensePieChart() {
//   const { transactions } = useContext(TransactionContext);

//   const expenses = transactions.filter(
//     (transaction) => transaction.type === "هزینه"
//   );

//   const categoryTotals = expenses.reduce((result, transaction) => {
//     const category = transaction.category || "بدون دسته‌بندی";
//     const amount = Number(transaction.amount) || 0;

//     result[category] = (result[category] || 0) + amount;

//     return result;
//   }, {});

//   const chartData = Object.entries(categoryTotals).map(
//     ([category, amount]) => ({
//       name: category,
//       value: amount,
//     })
//   );

//   return (
//     <div
//       className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
//       dir="rtl"
//     >
//       <h2 className="text-lg font-bold text-slate-800">
//         تفکیک هزینه‌ها
//       </h2>
//       <p className="text-sm text-slate-500 mt-1 mb-5">
//         سهم هر دسته‌بندی از کل هزینه‌ها
//       </p>

//       {chartData.length === 0 ? (
//         <div className="h-64 flex items-center justify-center text-slate-400 text-sm">
//           هنوز هزینه‌ای ثبت نشده است.
//         </div>
//       ) : (
//         <ResponsiveContainer width="100%" height={280}>
//           <PieChart>
//             <Pie
//               data={chartData}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="45%"
//               outerRadius={85}
//               innerRadius={50}
//               paddingAngle={3}
//             >
//               {chartData.map((entry, index) => (
//                 <Cell
//                   key={entry.name}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>

//             <Tooltip
//               formatter={(value) => [
//                 `${Number(value).toLocaleString("fa-IR")} تومان`,
//                 "مبلغ هزینه",
//               ]}
//             />

//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       )}
//     </div>
//   );
// }

// export default ExpensePieChart;


import { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import TransactionContext from "../../context/TransactionContext";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#06B6D4",
  "#F97316",
  "#84CC16",
  "#64748B",
];

function ExpensePieChart() {
  const { transactions } = useContext(TransactionContext);

  const expenses = transactions.filter(
    (transaction) => transaction.type === "هزینه"
  );

  const categoryTotals = expenses.reduce((result, transaction) => {
    const category = transaction.category || "بدون دسته‌بندی";
    const amount = Number(transaction.amount) || 0;

    result[category] = (result[category] || 0) + amount;

    return result;
  }, {});

  const chartData = Object.entries(categoryTotals).map(
    ([category, amount]) => ({
      name: category,
      value: amount,
    })
  );

  return (
    <div
      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mt-6"
      dir="rtl"
    >
      <h2 className="text-lg font-bold text-slate-800">
        تفکیک هزینه‌ها
      </h2>

      <p className="text-sm text-slate-500 mt-1 mb-5">
        سهم هر دسته‌بندی از کل هزینه‌ها
      </p>

      {chartData.length === 0 ? (
        <div className="h-64 flex items-center justify-center text-slate-400 text-sm">
          هنوز هزینه‌ای ثبت نشده است.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              outerRadius={100}
              innerRadius={45}
              paddingAngle={4}
              stroke="#ffffff"
              strokeWidth={3}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [
                `${Number(value).toLocaleString("fa-IR")} تومان`,
                "مبلغ هزینه",
              ]}
            />

            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ExpensePieChart;