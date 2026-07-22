function TransactionList({ transactions, deleteTransaction }) {
  if (transactions.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
        <h2 className="text-xl font-semibold text-white">
          Transactions
        </h2>

        <p className="mt-4 text-gray-400">
          No transactions added yet.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Transactions
      </h2>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-gray-800 p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">
                {transaction.title}
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                {transaction.category}
              </p>

              <p className="text-sm text-gray-500">
                {transaction.date}
              </p>
            </div>

            <div className="flex items-center gap-4">

              <span
                className={`rounded-lg px-3 py-1 text-sm font-medium ${
                  transaction.type === "Income"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {transaction.type}
              </span>

              <p
                className={`text-lg font-bold ${
                  transaction.type === "Income"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {transaction.type === "Income" ? "+" : "-"}₹
                {transaction.amount.toLocaleString()}
              </p>

              <button
                onClick={() => deleteTransaction(transaction.id)}
                className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
              >
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;