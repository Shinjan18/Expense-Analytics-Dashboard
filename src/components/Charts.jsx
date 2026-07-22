import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

function Charts({ transactions, income, expense }) {
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "Expense",
  );

  const categoryData = [];

  expenseTransactions.forEach((transaction) => {
    const existingCategory = categoryData.find(
      (item) => item.name === transaction.category,
    );

    if (existingCategory) {
      existingCategory.value += transaction.amount;
    } else {
      categoryData.push({
        name: transaction.category,
        value: transaction.amount,
      });
    }
  });

  const summaryData = [
    {
      name: "Income",
      amount: income,
    },
    {
      name: "Expense",
      amount: expense,
    },
  ];

  const colors = [
    "#3B82F6",
    "#22C55E",
    "#EF4444",
    "#EAB308",
    "#A855F7",
    "#06B6D4",
    "#F97316",
    "#EC4899",
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <h2 className="mb-6 text-xl font-bold text-white">
          Expense by Category
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <h2 className="mb-6 text-xl font-bold text-white">Income vs Expense</h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={summaryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
export default Charts;