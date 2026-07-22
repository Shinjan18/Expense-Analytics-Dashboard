import DashboardCard from "./DashboardCard";

function Summary({ balance, income, expense, monthlyIncome, monthlyExpense }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <DashboardCard
        title="Total Balance"
        amount={balance}
        color="hover:border-blue-500"
      />

      <DashboardCard
        title="Total Income"
        amount={income}
        color="hover:border-green-500"
      />

      <DashboardCard
        title="Total Expense"
        amount={expense}
        color="hover:border-red-500"
      />

      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg">
        <h3 className="mb-4 text-gray-400">This Month</h3>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-300">Income</span>

            <span className="font-semibold text-green-400">
              ₹{monthlyIncome.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-300">Expense</span>

            <span className="font-semibold text-red-400">
              ₹{monthlyExpense.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Summary;