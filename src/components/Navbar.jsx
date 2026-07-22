function Navbar() {
  const today = new Date();
  const currentDate =
    today.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <nav className="border-b border-gray-800 bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Expense Analytics Dashboard
          </h1>
          <p className="mt-1 text-gray-400">
            Manage your income and expenses
          </p>
        </div>
        <div className="text-gray-400">
          {currentDate}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;