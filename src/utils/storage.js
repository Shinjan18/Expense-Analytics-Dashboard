const STORAGE_KEY = "expenseTransactions";

function getTransactions() {
  const savedTransactions = localStorage.getItem(STORAGE_KEY);

  if (!savedTransactions) {
    return [];
  }

  return JSON.parse(savedTransactions);
}

function saveTransactions(transactions) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(transactions)
  );
}

export { getTransactions, saveTransactions };