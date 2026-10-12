
import {
  Area,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function FinancialChart({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "درآمد")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "هزینه")
    .reduce((total, transaction) => total + transaction.amount, 0);

const chartData = transactions.map((transaction) => ({
  name: transaction.title,
  amount: transaction.amount,
}));
  return (
    <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

      <h2 className="text-lg font-bold text-slate-900 mb-6">
        گزارش مالی
      </h2>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 20,
              right: 10,
              bottom: 20,
              left: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="amount"
              strokeWidth={3}
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default FinancialChart;

