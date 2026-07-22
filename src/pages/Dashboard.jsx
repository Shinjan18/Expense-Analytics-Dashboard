import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Summary from "../components/Summary";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { getTransactions, saveTransactions } from "../utils/storage";
import Charts from "../components/Charts";

function Dashboard() {
  const [transactions, setTransactions] = useState(() => {
    return getTransactions();
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Newest");

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  function addTransaction(newTransaction) {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      {
        id: Date.now(),
        ...newTransaction,
      },
    ]);
  }

  function deleteTransaction(id) {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id,
    );

    setTransactions(updatedTransactions);
  }

  const totalIncome = transactions
    .filter((item) => item.type === "Income")
    .reduce((total, item) => total + item.amount, 0);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyIncome = transactions
    .filter((transaction) => {
      const transactionDate = new Date(transaction.date);

      return (
        transaction.type === "Income" &&
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear
      );
    })
    .reduce((total, transaction) => total + transaction.amount, 0);

  const monthlyExpense = transactions
    .filter((transaction) => {
      const transactionDate = new Date(transaction.date);

      return (
        transaction.type === "Expense" &&
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear
      );
    })
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((total, item) => total + item.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  let filteredTransactions = [...transactions];

  // Search
  filteredTransactions = filteredTransactions.filter((transaction) =>
    transaction.title.toLowerCase().includes(search.toLowerCase()),
  );

  // Filter
  if (filter !== "All") {
    filteredTransactions = filteredTransactions.filter(
      (transaction) => transaction.type === filter,
    );
  }

  // Sort
  if (sort === "Newest") {
    filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (sort === "Oldest") {
    filteredTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  if (sort === "Amount Low to High") {
    filteredTransactions.sort((a, b) => a.amount - b.amount);
  }

  if (sort === "Amount High to Low") {
    filteredTransactions.sort((a, b) => b.amount - a.amount);
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Summary
          balance={totalBalance}
          income={totalIncome}
          expense={totalExpense}
          monthlyIncome={monthlyIncome}
          monthlyExpense={monthlyExpense}
        />

        <TransactionForm addTransaction={addTransaction} />

        <SearchBar search={search} setSearch={setSearch} />

        <Filter
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />

        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
        />
        <Charts
          transactions={transactions}
          income={totalIncome}
          expense={totalExpense}
        />
      </div>
    </div>
  );
}

export default Dashboard;
