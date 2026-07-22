import { useState } from "react";

const incomeCategories = [
  "Salary",
  "Freelance",
  "Business",
  "Investment",
  "Bonus",
  "Others",
];

const expenseCategories = [
  "Food",
  "Shopping",
  "Travel",
  "Bills",
  "Health",
  "Entertainment",
  "Education",
  "Others",
];

function TransactionForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("Expense");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      title.trim() === "" ||
      amount === "" ||
      Number(amount) <= 0 ||
      date === ""
    ) {
      alert("Please fill all fields correctly.");
      return;
    }

    const newTransaction = {
      title,
      amount: Number(amount),
      category,
      type,
      date,
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setCategory("Food");
    setType("Expense");
    setDate("");
  }

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-white">Add Transaction</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        <div>
          <label className="mb-2 block text-sm text-gray-300">Title</label>

          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">Amount</label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          >
            {(type === "Income" ? incomeCategories : expenseCategories).map(
              (item) => (
                <option key={item}>{item}</option>
              ),
            )}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">Type</label>

          <select
            value={type}
            onChange={(e) => {
              const selectedType = e.target.value;

              setType(selectedType);

              if (selectedType === "Income") {
                setCategory("Salary");
              } else {
                setCategory("Food");
              }
            }}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          >
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">Date</label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}
export default TransactionForm;